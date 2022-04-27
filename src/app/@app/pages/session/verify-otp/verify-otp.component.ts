import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ActivatedRoute, Router } from "@angular/router";
import { AuthApi } from "src/app/@core-web/service/remote/auth.api";
import { UserTokenDto } from "src/app/@shared/dto/user-token.dto";
import { ApiResponse } from "src/app/@shared/dto/api-response.dto";
import { ResponseStatus } from "src/app/@shared/enum/response-status";
import { AuthService } from "src/app/@core-web/security/auth.service";

@Component({
  selector: "app-verify-otp",
  templateUrl: "./verify-otp.component.html",
  styleUrls: ["./verify-otp.component.scss"]
})
export class verifyOtpComponent implements OnInit {
  /* ************************************* Static Field ********************************************* */
  /* ************************************* Instance Field ******************************************** */
  public form: FormGroup;
  authyId: string;

  /* ************************************* Constructors ******************************************** */
  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private authApi: AuthApi) { }

  /* ************************************* Public Methods ******************************************** */
  public ngOnInit() {
    this._getAuthyId();
    this._initForm();
  }

  public onSubmit() {
    if (!this.authyId || this.form.invalid) {
      return;
    }
    this.authApi.verifyOtp(this.authyId, this.form.value?.otp)
      .subscribe((res: ApiResponse<UserTokenDto>) => {
        if (res.status === ResponseStatus[ResponseStatus.SUCCESS]) {
          this.authService.saveToken(res.body.token);
          this.router.navigate(["/"]);
        }
      });
  }

  /* ************************************* Private Methods ******************************************** */
  private _initForm() {
    this.form = this.fb.group({
      otp: [
        null,
        Validators.compose([Validators.required, Validators.maxLength(7),
        Validators.minLength(7)])
      ]
    });
  }

  private _getAuthyId(): void {
    this.authyId = this.route?.snapshot?.paramMap?.get('authyId');
  }
}
