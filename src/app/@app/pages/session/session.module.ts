import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CommonModule } from "@angular/common";
import { ErrorComponent } from "./error/error.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ForgotComponent } from "./forgot/forgot.component";
import { LockscreenComponent } from "./lockscreen/lockscreen.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RouterModule } from "@angular/router";
import { SessionRoutes } from "./session.routing";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { LegalComponent } from './legal/legal.component';
import { SendOtpComponent } from "./send-otp/send-otp.component";
import { verifyOtpComponent } from "./verify-otp/verify-otp.component";
import { InvitationComponent } from './invitation/invitation.component';
import { RemoteApiModule } from "../../service/remote/remote-api.module";
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SessionRoutes),
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordStrengthMeterModule,
    RemoteApiModule,
    MatSelectModule
  ],
  declarations: [
    NotFoundComponent,
    ErrorComponent,
    ForgotComponent,
    LockscreenComponent,
    SigninComponent,
    SignupComponent,
    LegalComponent,
    SendOtpComponent,
    verifyOtpComponent,
    InvitationComponent
  ]
})
export class SessionModule { }
