import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/@shared/dto/api-response.dto';
import { environment } from '../../../../environments/environment';
import { URL } from '../../const/url';
import { ChildVo } from '../../vo/child.vo';

@Injectable()
export class ChildApi {

    /* ************************************ Constructors ************************************ */
    constructor(private http: HttpClient) {
    }

    /* ************************************ Public Methods ************************************ */
    public addUpdateChild(child: ChildVo): Observable<ApiResponse<ChildVo>> {
        return this.http.post<ApiResponse<ChildVo>>(environment.apiUrl + URL.CHILD_ADD_UPDATE, child);
    }
    
    public getChildList(): Observable<ApiResponse<Array<ChildVo>>> {
        return this.http.get<ApiResponse<Array<ChildVo>>>(environment.apiUrl + URL.CHILD_LIST);
    }
}

