import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class SpinnerService {
  public status: Subject<any> = new Subject();
  private _active = false;
  private _spinnerResponse: any;

  public getActive(): boolean {
    return this._active;
  }

  public manageSpinner(v: boolean, msg: string) {
    this._active = v;
    this._spinnerResponse = {'status': v, 'msg': msg};
    this.status.next(this._spinnerResponse);
  }

  public start(msg): void {
    this.manageSpinner(true, msg);
  }

  public stop(): void {
    this.manageSpinner(false, '');
  }
}
