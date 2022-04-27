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
  showStepProfile: boolean;
  showStepFamily: boolean;
  showStepChild: boolean;

  // Profile setup 
  user: UserVo;
  userClaim: any;

  setupDone: boolean;
  loaded: boolean;

  showSetupcoparent: boolean;

  // Coparent related fields
  family: FamilyVo;
  loadedCoparent: boolean;

  /* ************************************* Constructors ******************************************** */
  constructor(private authService: AuthService,
    private globalEmitterService: GlobalEmitterService,
    private familyApi: FamilyApi) {
  }

  /* ************************************* Public Methods ****************************************** */
  ngOnInit(): void {
    this._init();
  }

  public subscribeProfile(e: UiActionDto<any>): void {
    if (e.action === 'PROFILE_SETUP_DONE') {
      this._resetSetup();
      if (this.showSetupcoparent) {
        this.setupDone = true;
        this.globalEmitterService.setupDone();
      } else {
        this.showStepFamily = true;
      }
    }
  }

  public subscribeFamily(e: UiActionDto<any>): void {
    if (e.action === 'FAMILY_SETUP_DONE') {
      this._resetSetup();
      this.showStepChild = true;
    }
  }

  public subscribeChild(e: UiActionDto<any>): void {
    if (e.action === 'SETUP_DONE') {
      this._resetSetup();
      this.setupDone = true;
      this.globalEmitterService.setupDone();
      // this.authService.logout();
    }
  }

  public updateStatusCoparent(status: string): void {
    this.familyApi.updateFamilyStatus(status).subscribe((res: ApiResponse<string>) => {
      if (res.status === 'SUCCESS') {
        this.globalEmitterService.setupDone();
      }
    });
  }

  private _getSetupStatus(): void {
    // this.familyApi.getFamilySetupStatus().subscribe((res: ApiResponse<FamilyStatusDto>) => {
    //   const dto = res.body;
    //   this.user = dto?.data ?? {} as UserVo;
    //   this._setLayout(dto);
    // });
  }

  /* ************************************* Private Methods ****************************************** */
  private _init(): void {
    this.userClaim = this.authService.getUser();
    this.showSetupcoparent = this.userClaim.role === "COPARENT";
    this._resetSetup();
    this._getSetupStatus();
  }
  private _resetSetup() {
    this.showStepProfile = false;
    this.showStepFamily = false;
    this.showStepChild = false;
  }

  private _setLayout(dto: FamilyStatusDto) {
    if (dto.status === true) {
      this.setupDone = true;
    } else {
      switch (dto.level) {
        case 'PROFILE':
          this.showStepProfile = true;
          break;
        case 'FAMILY':
          this.showStepFamily = true;
          break;
        case 'CHILD':
          this.showStepChild = true;
          break;
      }
    }
    this.loaded = true;
  }
}
