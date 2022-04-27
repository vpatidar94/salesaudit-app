import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

import { CustomValidators } from "ng2-validation";
import { Router } from "@angular/router";
import { UserApi } from 'src/app/@core-web/service/remote/user.api';
import { GlobalEmitterService } from 'src/app/@core-web/service/global-emitter.service';

const password__c = new FormControl("", Validators.required);
const confirmPassword = new FormControl("", CustomValidators.equalTo(password__c));

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  /* ************************************* Static Field ********************************************* */
  /* ************************************* Instance Field ******************************************** */
  public signUpForm: FormGroup;

  /* ************************************* Constructors ******************************************** */
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userApi: UserApi,
    private globalEmitterService: GlobalEmitterService) { }

  /* ************************************* Public Methods ******************************************** */
  public ngOnInit() {
    this._init();
  }

  public signUpUser() {
    if (!this.signUpForm.valid) {
      this.globalEmitterService.addMsg("Wrong Details");
      return;
    }
    // const user = this.signUpForm.value as UserVo;
    // user.email = user.email.toLocaleLowerCase();
    // this.userApi.addUpdateUserAccount(user).subscribe((res: ApiResponse<UserVo>) => {
    //   if (res.status === ResponseStatus[ResponseStatus.SUCCESS]) {
    //     const cellLast4 = res.body.cell.slice(res.body.cell.length - 4)
    //     this.router.navigate(["/session/send-otp", res.body.authyId, cellLast4]);
    //   }
    // }, (error) => {
    //   console.log('Log the error here: ', error);
    // });
  }

  /* ************************************* Private Methods ******************************************** */
  private _init(): void {
    this._initSignUpForm();
  }

  private _initSignUpForm() {
    this.signUpForm = this.fb.group({
      // Lead_Type: [
      //   "Already Parent",
      //   Validators.compose([Validators.required])
      // ],
      // FirstName: [
      //   null,
      //   Validators.compose([Validators.required])
      // ],
      // LastName: [
      //   null,
      //   Validators.compose([Validators.required])
      // ],
      // Phone: [
      //   null,
      //   Validators.compose([Validators.required, Validators.maxLength(10),
      //   Validators.minLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
      // ],
      Email: [
        null,
        Validators.compose([Validators.required, CustomValidators.email])
      ],
      password__c,
      confirmPassword
    });
  }
}
