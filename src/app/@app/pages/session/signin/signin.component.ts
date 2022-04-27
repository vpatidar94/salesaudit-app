import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Router } from "@angular/router";
import { AuthService } from 'src/app/@core-web/security/auth.service';
import { GlobalEmitterService } from 'src/app/@core-web/service/global-emitter.service';
import { AuthApi } from 'src/app/@core-web/service/remote/auth.api';
import { ApiResponse } from "src/app/@shared/dto/api-response.dto";
import { UserTokenDto } from "src/app/@shared/dto/user-token.dto";
import { ResponseStatus } from 'src/app/@shared/enum/response-status';

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  /* ************************************* Static Field ********************************************* */
  /* ************************************* Instance Field ******************************************** */
  public form: FormGroup;
  public hide = true;

  /* ************************************* Constructors ******************************************** */
  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private globalEmitterService: GlobalEmitterService,
    private authApi: AuthApi) { }

  /* ************************************* Public Methods ******************************************** */
  public ngOnInit() {
    this._init();
  }

  public onSubmit() {
    if (!this.form.valid) {
      this.globalEmitterService.addMsg("Wrong Details");
      return;
    }
    const formValue = this.form.value;
    this.authApi.login(formValue.email, formValue.password).subscribe((res: ApiResponse<string>) => {
      if (res.status === ResponseStatus[ResponseStatus.SUCCESS]) {
        if (res.body) {
          this.authService.saveToken(res.body);
          this.router.navigate(["/"]);
        }
      }
    });
  }

  /* ************************************* Private Methods ******************************************** */
  private _init() {
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }
}
