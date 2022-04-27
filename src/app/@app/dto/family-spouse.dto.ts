import { UserVo } from "src/app/@shared/vo/user.vo";
import { FamilyVo } from "../vo/family.vo";

export interface FamilySpouseDto {
    family: FamilyVo;
    spouse: UserVo;
    role: string; // COP_HUSBAND, COP_WIFE, COP_OTHER, PARENT
}
