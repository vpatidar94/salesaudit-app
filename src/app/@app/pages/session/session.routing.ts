import { ErrorComponent } from "./error/error.component";
import { ForgotComponent } from "./forgot/forgot.component";
import { LockscreenComponent } from "./lockscreen/lockscreen.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { Routes } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { LegalComponent } from './legal/legal.component';
import { SendOtpComponent } from "./send-otp/send-otp.component";
import { verifyOtpComponent } from "./verify-otp/verify-otp.component";
import { InvitationComponent } from "./invitation/invitation.component";

export const SessionRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "404",
        component: NotFoundComponent
      },
      {
        path: "error",
        component: ErrorComponent
      },
      {
        path: "forgot",
        component: ForgotComponent
      },
      {
        path: "lockscreen",
        component: LockscreenComponent
      },
      {
        path: "signin",
        component: SigninComponent
      },
      {
        path: "signup",
        component: SignupComponent
      },
      {
        path: "legal",
        component: LegalComponent
      },
      {
        path: "send-otp/:authyId/:cell",
        component: SendOtpComponent
      },
      {
        path: "verify-otp/:authyId",
        component: verifyOtpComponent
      },
      {
        path: "i/:id",
        component: InvitationComponent
      }
    ]
  }
];
