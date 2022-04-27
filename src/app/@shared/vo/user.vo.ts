import { AddressVo } from "./address.vo";

export interface UserVo {
    id: number;

    nameF: string;
    nameL: string;

    cell: string;
    email: string;

    password: string;
    
    tfa: boolean;
    authyId: string;
    sfid: string;
    
    created: string;

    address: AddressVo;
}
