import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { URL } from '../../../@app/const/url';
import { ApiResponse } from 'src/app/@shared/dto/api-response.dto';
import { UserVo } from 'src/app/@shared/vo/user.vo';

@Injectable()
export class UserApi {

    /* ************************************ Constructors ************************************ */
    constructor(private http: HttpClient) {
    }

    /* ************************************ Public Methods ************************************ */
    public addUpdateUserAccount(user: UserVo): Observable<ApiResponse<UserVo>> {
        return this.http.post<ApiResponse<UserVo>>(environment.apiUrl + URL.USER_ACCOUNT_ADD_UPDATE, user);
    }

    public getUser(id: string): Observable<ApiResponse<UserVo>> {
        return this.http.get<ApiResponse<UserVo>>(environment.apiUrl + URL.PROFILE, { 'params': { id } });
    }

    public updateProfile(user: UserVo): Observable<ApiResponse<any>> {
        return this.http.post<ApiResponse<any>>(environment.apiUrl + URL.PROFILE, user);
    }
}
