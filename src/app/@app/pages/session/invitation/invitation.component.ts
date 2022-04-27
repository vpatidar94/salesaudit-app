import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CustomValidators } from "ng2-validation";
import { FamilyApi } from "src/app/@app/service/remote/family.api";
import { InvitationVo } from "src/app/@app/vo/invitation.vo";
import { AuthService } from "src/app/@core-web/security/auth.service";
import { GlobalEmitterService } from 'src/app/@core-web/service/global-emitter.service';
import { ApiResponse } from 'src/app/@shared/dto/api-response.dto';
import { ResponseStatus } from "src/app/@shared/enum/response-status";
import { UserVo } from "src/app/@shared/vo/user.vo";


const password = new FormControl("", Validators.required);
const confirmPassword = new FormControl("", CustomValidators.equalTo(password));

@Component({
  selector: "app-invitation",
  templateUrl: "./invitation.component.html",
  styleUrls: ["./invitation.component.scss"]
})
export class InvitationComponent implements OnInit {
  /* ************************************* Static Field ********************************************* */
  /* ************************************* Instance Field ******************************************** */
  public signUpForm: FormGroup;
  public iId: string;

  public invitation: InvitationVo;
  public linkExpired: boolean;

  public loaded: boolean;

  /* ************************************* Constructors ******************************************** */
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private familyApi: FamilyApi,
    private router: Router,
    private authService: AuthService,
    private globalEmitterService: GlobalEmitterService) { }

  /* ************************************* Public Methods ******************************************** */
  public ngOnInit() {
    this._init();
  }

  public setStatus(status: string) {
    if (!this.signUpForm.valid && status === "ACCEPT") {
      this.globalEmitterService.addMsg("Wrong Details");
      return;
    }

    const form = this.signUpForm.value;
    const password = form.password;

    this.familyApi.invitationStatus(this.iId, status, password).subscribe((res: ApiResponse<UserVo>) => {
      if (res.status === ResponseStatus[ResponseStatus.SUCCESS]) {
        if (status === "ACCEPT") {
          const cellLast4 = res.body.cell.slice(res.body.cell.length - 4)
          this.router.navigate(["/session/send-otp", res.body.authyId, cellLast4]);
        } else {
          this.router.navigate(["/"]);
        }
      }
    }, (error) => {
      console.log('Log the error here: ', error);
    });
  }

  /* ************************************* Private Methods ******************************************** */
  private _init(): void {
    this.iId = this.route?.snapshot?.paramMap?.get('id');
    if (this.iId) {
      this._getInvitation();
      this._initSignUpForm();
    }
  }
  private _getInvitation() {
    this.invitation = {} as InvitationVo;
    this.familyApi.getInvitation(this.iId).subscribe((res: ApiResponse<InvitationVo>) => {
      this.invitation = res.body;
      this.linkExpired = this._isLinkExpired(this.invitation);
      this.loaded = true;
    });
  }

  private _isLinkExpired(invitation: InvitationVo): boolean {
    if (invitation?.id) {
      return this.authService.isTokenExpired(invitation.token);
    }
    return true;
  }

  private _initSignUpForm() {
    this.signUpForm = this.fb.group({
      password,
      confirmPassword
    });
  }

  private _getHours(d: Date): number {
    console.log("xx xx xx xx createddate d", d)
    let diff = (new Date().getTime() - new Date(d).getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));
  }
}
