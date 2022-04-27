import { UserVo } from "src/app/@shared/vo/user.vo";

export interface ChildVo extends UserVo {
    childId: string;
    dob: Date;
    careLevel: string;
    familyId: string;
    parentEmail: string;
}