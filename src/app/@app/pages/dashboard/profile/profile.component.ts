import { animate, style, transition, trigger } from "@angular/animations";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "ng2-validation";
import { UserApi } from "src/app/@core-web/service/remote/user.api";
import { ApiResponse } from "src/app/@shared/dto/api-response.dto";
import { UiActionDto } from "src/app/@shared/dto/ui-action.dto";
import { UserVo } from "src/app/@shared/vo/user.vo";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  animations: [
    trigger('slideInOut', [
      // transition(':enter', [
      //   style({ transform: 'translateX(-100%)' }),
      //   animate('200ms ease-in', style({ transform: 'translateX(0%)' }))
      // ]),
      transition(':leave', [
        animate('500ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit {
  /* ************************************* Static Field ********************************************* */
  /* ************************************* Instance Field ******************************************* */
  public signUpForm: FormGroup;
  public loaded: boolean;

  public showStep1: boolean;
  public showStep2: boolean;
  public showStep3: boolean;

  public activeStep: number;
  public steps = [1, 2, 3];

  @Output()
  pubSub = new EventEmitter<any>();

  @Input()
  public user: UserVo;
  @Output()
  userChange = new EventEmitter<UserVo>();

  /* ************************************* Constructors ******************************************** */
  constructor(private fb: FormBuilder,
    private userApi: UserApi) { }

  /* ************************************* Public Methods ******************************************* */
  public ngOnInit(): void {
    // if(!this.user || this.user?.id) {
    //   this.user = {} as UserVo;
    //   if(!this.user.address) {
    //     this.user.address = {} as AddressVo;
    //   }
    // }
    this._initSignUpForm();
    this._resetSection();
    this.showStep1 = true;
    this.activeStep = 1;
  }

  public saveUser(): void {
    this.user.nameF = this.signUpForm.value?.nameF;
    this.user.nameL = this.signUpForm.value?.nameL;
    this.user.tfa = this.signUpForm.value?.tfa;
    this._setAddress();
    this.userChange.emit(this.user);
    this.userApi.updateProfile(this.user).subscribe((res: ApiResponse<any>) => {
      this._notifyParent();
    });
  }

  public changeStep(step: number): void {
    this._resetSection();
    setTimeout(() => {
      this.activeStep = step;
      switch (step) {
        case 1:
          this.showStep1 = true;
          break;
        case 2:
          this.showStep2 = true;
          break;
        case 3:
          this.showStep3 = true;
          break;
      }
    }, 500);
  }

  /* ************************************* Private Methods ****************************************** */
  private _initSignUpForm() {
    this.signUpForm = this.fb.group({
      nameF: [
        this.user.nameF,
        Validators.compose([Validators.required])
      ],
      nameL: [
        this.user.nameL,
        Validators.compose([Validators.required])
      ],
      cell: [
        this.user.cell,
        Validators.compose([Validators.required, Validators.maxLength(10),
        Validators.minLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
      ],
      email: [
        this.user.email,
        Validators.compose([Validators.required, CustomValidators.email])
      ],
      tfa: [
        this.user.tfa,
      ],
      street: [
        this.user.address.street,
        Validators.compose([Validators.required])
      ],
      landmark: [
        this.user.address.landmark,
      ],
      zip: [
        this.user.address.zip,
        Validators.compose([Validators.required])
      ],
      city: [
        this.user.address.city,
        Validators.compose([Validators.required])
      ],
      state: [
        this.user.address.state,
        Validators.compose([Validators.required])
      ],
      country: [
        this.user.address.country,
        Validators.compose([Validators.required])
      ],
    });
  }

  private _setAddress(): void {
    this.user.address.street = this.signUpForm.value?.street;
    this.user.address.landmark = this.signUpForm.value?.landmark;
    this.user.address.zip = this.signUpForm.value?.zip;
    this.user.address.city = this.signUpForm.value?.city;
    this.user.address.state = this.signUpForm.value?.state;
    this.user.address.country = this.signUpForm.value?.country;
  }

  private _resetSection(): void {
    this.showStep1 = false;
    this.showStep2 = false;
    this.showStep3 = false;
  }


  private _notifyParent(): void {
    const actionDto = <UiActionDto<boolean>>{
      action: 'PROFILE_SETUP_DONE',
      data: true
    };
    this.pubSub.emit(actionDto);
  }
}
