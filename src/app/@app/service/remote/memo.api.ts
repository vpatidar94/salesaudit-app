import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/@shared/dto/api-response.dto';
import { environment } from '../../../../environments/environment';
import { URL } from '../../const/url';
import { MemoVo } from '../../vo/memo.vo';

@Injectable()
export class MemoApi {

    /* ************************************ Constructors ************************************ */
    constructor(private http: HttpClient) {
    }

    /* ************************************ Public Methods ************************************ */
    public addUpdateMemo(memo: MemoVo): Observable<ApiResponse<MemoVo>> {
        return this.http.post<ApiResponse<MemoVo>>(environment.apiUrl + URL.MEMO_ADD_UPDATE, memo);
    }

    public getMemoList(): Observable<ApiResponse<Array<MemoVo>>> {
        return this.http.get<ApiResponse<Array<MemoVo>>>(environment.apiUrl + URL.MEMO_LIST);
    }

    public pushMemoImage(file: File, key: string, dir: string): Observable<HttpEvent<{}>> {
        const formdata: FormData = new FormData();

        formdata.append('image', file);
        formdata.append('key', key);
        formdata.append('dir', dir);

        const req = new HttpRequest('POST', environment.apiUrl + URL.MEMO_MEDIA, formdata, {
            reportProgress: true,
            responseType: 'text'
        });

        return this.http.request(req);
    }
}

