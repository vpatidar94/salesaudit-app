import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { URL } from '../../const/url';
import { ApiResponse } from 'src/app/@shared/dto/api-response.dto';
import { FamilyVo } from '../../vo/family.vo';
import { FamilySpouseDto } from '../../dto/family-spouse.dto';
import { FamilyStatusDto } from '../../dto/family-status.dto';
import { InvitationVo } from '../../vo/invitation.vo';
import { UserVo } from 'src/app/@shared/vo/user.vo';

@Injectable()
export class FamilyApi {

    /* ************************************ Constructors ************************************ */
    constructor(private http: HttpClient) {
    }

    /* ************************************ Public Methods ************************************ */
    public addUpdateFamily(family: FamilyVo): Observable<ApiResponse<FamilyVo>> {
        return this.http.post<ApiResponse<FamilyVo>>(environment.apiUrl + URL.FAMILY_ADD_UPDATE, family);
    }

    //add-update-family-spouse
    public addUpdateFamilySpouse(family: FamilySpouseDto): Observable<ApiResponse<FamilyVo>> {
        return this.http.post<ApiResponse<FamilyVo>>(environment.apiUrl + URL.FAMILY_SPOUSE_ADD_UPDATE, family);
    }

    public getFamilySetupStatus(): Observable<ApiResponse<FamilyStatusDto>> {
        return this.http.get<ApiResponse<FamilyStatusDto>>(environment.apiUrl + URL.FAMILY_STATUS);
    }

    public getFamily(): Observable<ApiResponse<FamilyVo>> {
        return this.http.get<ApiResponse<FamilyVo>>(environment.apiUrl + URL.FAMILY_DETAIL);
    }

    public updateFamilyStatus(status: string): Observable<ApiResponse<string>> {
        return this.http.get<ApiResponse<string>>(environment.apiUrl + URL.FAMILY_STATUS_UPDATE, { 'params': { status } });
    }

    public getInvitation(invitationId: string): Observable<ApiResponse<InvitationVo>> {
        return this.http.get<ApiResponse<InvitationVo>>(environment.apiUrl + URL.FAMILY_INVITATION, { 'params': { invitationId } });
    }

    public invitationStatus(invitationId: string, status: string, password: string): Observable<ApiResponse<UserVo>> {
        return this.http.get<ApiResponse<UserVo>>(environment.apiUrl + URL.FAMILY_INVITATION_STATUS, { 'params': { invitationId, status, password } });
    }
}

