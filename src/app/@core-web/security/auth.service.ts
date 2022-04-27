import { Injectable } from '@angular/core';
import { KeyValueStorageService } from 'src/app/@shared/service/key-value-storage.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

const helper = new JwtHelperService();


@Injectable()
export class AuthService {

  /* ************************************ Constructors ************************************ */
  constructor(private keyValueStorageService: KeyValueStorageService,
    private router: Router) { }

  /* ************************************ Public Methods ************************************ */
  // public login(loginVo: LoginVo): Observable<ApiResponse<string>> {
  //   return this.http.post<ApiResponse<string>>(URL.LOGIN, loginVo);
  // }

  public isAuthenticated(): boolean {
    const token = this.keyValueStorageService.getJwtToken();
    if (token) {
      return !helper.isTokenExpired(token);
    }
    return false;
  }

  public saveToken(token: string) {
    this.keyValueStorageService.saveJwtToken(token);
  }

  public logout() {
    this.keyValueStorageService.removeToken();
    this.router.navigate(['/session/signin']);
  }

  public getUserId(): string {
    const token = this.keyValueStorageService.getJwtToken();
    return helper.decodeToken(token)?.id;
  }

  public getUser(): any {
    const token = this.keyValueStorageService.getJwtToken();
    return helper.decodeToken(token);
  }

  public isTokenExpired(token: string): boolean {
    return helper.isTokenExpired(token);
  }
}
