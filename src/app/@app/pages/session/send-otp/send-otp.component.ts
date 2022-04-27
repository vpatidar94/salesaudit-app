import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { AuthApi } from "src/app/@core-web/service/remote/auth.api";
import { ApiResponse } from "src/app/@shared/dto/api-response.dto";
import { UserTokenDto } from "src/app/@shared/dto/user-token.dto";
import { ResponseStatus } from "src/app/@shared/enum/response-status";
import { AuthService } from "src/app/@core-web/security/auth.service";

@Component({
  selector: "app-send-otp",
  templateUrl: "./send-otp.component.html",
  styleUrls: ["./send-otp.component.scss"]
})
export class SendOtpComponent implements OnInit {
  /* ************************************* Static Field ********************************************* */
  /* ************************************* Instance Field ******************************************** */
  authyId: string;
  cell: string;

  /* ************************************* Constructors ******************************************** */
  constructor(private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private authApi: AuthApi) { }

  /* ************************************* Public Methods ****************************************** */
  public ngOnInit(): void {
    this._getAuthyId();
  }

  public sendOtp(): void {
    if (!this.authyId) {
      return;
    }
    this.authApi.sendOtp(this.authyId).subscribe();
  }

  public verifyOtp(otp: string): void {
    if (!this.authyId || !otp) {
      return;
    }
    this.authApi.verifyOtp(this.authyId, otp)
      .subscribe((res: ApiResponse<UserTokenDto>) => {
        if (res.status === ResponseStatus[ResponseStatus.SUCCESS]) {
          this.authService.saveToken(res.body.token);
          this.router.navigate(["/"]);
        }
      });
  }

  /* ************************************* Private Methods ****************************************** */
  private _getAuthyId(): void {
    this.authyId = this.route?.snapshot?.paramMap?.get('authyId');
    this.cell = this.route?.snapshot?.paramMap?.get('cell');
  }
}
