export interface InvitationVo {
    id: number;
    invitationId: string;
    token: string;

    cell: string;
    email: string;
    familyId: string;
    familyName: string;
    nameF: string;
    nameL: string;
    
    created: Date;
}
