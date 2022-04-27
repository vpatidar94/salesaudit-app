import { Component, OnInit } from "@angular/core";
import { FamilyStatusDto } from "../../../@app/dto/family-status.dto";
import { FamilyApi } from "../../../@app/service/remote/family.api";
import { FamilyVo } from "../../../@app/vo/family.vo";
import { AuthService } from "../../../@core-web/security/auth.service";
import { GlobalEmitterService } from "../../../@core-web/service/global-emitter.service";
import { ApiResponse } from "../../../@shared/dto/api-response.dto";
import { UiActionDto } from "../../../@shared/dto/ui-action.dto";
import { UserVo } from "../../../@shared/vo/user.vo";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  /* ************************************* Static Field ******************************************** */
  /* ************************************* Instance Field ****************************************** */
  // showStepProfile: boolean;
  // showStepFamily: boolean;
  // showStepChild: boolean;

  // Profile setup 
  // user: UserVo;
  // userClaim: any;

  // setupDone: boolean;
  // loaded: boolean;

  // showSetupcoparent: boolean;

  // Coparent related fields
  // family: FamilyVo;
  // loadedCoparent: boolean;

  /* ************************************* Constructors ******************************************** */
  constructor(private authService: AuthService,
    private globalEmitterService: GlobalEmitterService,
    private familyApi: FamilyApi) {
  }

  /* ************************************* Public Methods ****************************************** */
  ngOnInit(): void {
    this._init();
  }

  /* ************************************* Private Methods ****************************************** */
  private _init(): void {
  }
}
