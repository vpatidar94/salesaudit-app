import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { GlobalEmitterService } from './global-emitter.service';
import { KeyValueStorageService } from 'src/app/@shared/service/key-value-storage.service';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  /* ************************************ Static Fields ************************************ */
  /* ************************************ Instance Fields ************************************ */

  /* ************************************ Constructors ************************************ */
  constructor(private globalEmitterService: GlobalEmitterService,
    private keyValueStorageService: KeyValueStorageService) {
  }

  /* ************************************ Public Methods ************************************ */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // as we want to intercept the possible errors, instead of directly returning the request execution, we return an Observable to control EVERYTHING
    return new Observable<HttpEvent<any>>(subscriber => {

      if (request.url.indexOf('/api') >= 0) {
        this.globalEmitterService.startSpinner();
        const token = this.keyValueStorageService.getJwtToken() ?? '';
        const authRequest = this._addToken(request, token);

        next.handle(authRequest)
          .subscribe(newEvent => {
            if (newEvent instanceof HttpResponse) {
              this.globalEmitterService.stopSpinner();
              this._interceptResponse(newEvent.status, newEvent.body.msg);
              subscriber.next(newEvent);
              subscriber.complete();
            }
          }, error => {
            this.globalEmitterService.stopSpinner();
            subscriber.error(error);
          });
      } else {
        next.handle(request)
          .subscribe((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              subscriber.next(event);
              subscriber.complete();
            }
          }, error => {
            subscriber.error(error);
          });
      }
    });
  }

  /* ************************************ Private Methods ************************************ */
  private _addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      headers: request.headers
        .append('authorization', 'Bearer ' + token)
        .append('Cache-Control', 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0')
        .append('Pragma', 'no-cache')
        .append('Expires', '0')
    });
  }

  private _interceptResponse(resStatus: number, msg: any) {
    switch (resStatus) {
      case 200: {
        if (msg) {
          console.log('xxxx xxx xx msg ', msg);
          this.globalEmitterService.addMsg(msg);
        }
        break;
      }
      case 401: // intercept 401
      case 403:
        // this._router.navigate(['/signin']); only work with ROUTER_DIRECTIVES
        // this.globalEmitterService.notifyAuthFail(resStatus);
        break;
      default:
        break;
    }
  }

  // private _getToken(url): string {
  //   return null;
  // }
}
