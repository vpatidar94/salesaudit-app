import { UserVo } from "src/app/@shared/vo/user.vo";

export interface FamilyStatusDto {
    level: string;
    status: boolean;
    data: UserVo;
}
