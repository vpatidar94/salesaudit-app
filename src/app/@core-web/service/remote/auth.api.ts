import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { URL } from '../../../@app/const/url';
import { ApiResponse } from 'src/app/@shared/dto/api-response.dto';
import { UserTokenDto } from 'src/app/@shared/dto/user-token.dto';

@Injectable()
export class AuthApi {

    /* ************************************ Constructors ************************************ */
    constructor(private http: HttpClient) {
    }

    /* ************************************ Public Methods ************************************ */
    public login(email: string, password__c: string): Observable<ApiResponse<string>> {
        return this.http.post<ApiResponse<string>>(environment.apiUrl + URL.LOGIN, { email, password__c });
    }

    public sendOtp(authyId: string): Observable<ApiResponse<boolean>> {
        return this.http.get<ApiResponse<boolean>>(environment.apiUrl + URL.SEND_OTP, { 'params': { authyId } });
    }

    public verifyOtp(authyId: string, otp: string): Observable<ApiResponse<UserTokenDto>> {
        return this.http.get<ApiResponse<UserTokenDto>>(environment.apiUrl + URL.VERIFY_OTP, { 'params': { authyId, otp } });
    }
}
