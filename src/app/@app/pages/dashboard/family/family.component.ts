import { animate, style, transition, trigger } from "@angular/animations";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatRadioChange } from "@angular/material/radio";
import { CustomValidators } from "ng2-validation";
import { FamilySpouseDto } from "src/app/@app/dto/family-spouse.dto";
import { FamilyApi } from "src/app/@app/service/remote/family.api";
import { FamilyVo } from "src/app/@app/vo/family.vo";
import { UiActionDto } from "src/app/@shared/dto/ui-action.dto";
import { UserVo } from "src/app/@shared/vo/user.vo";

@Component({
  selector: "app-family",
  templateUrl: "./family.component.html",
  styleUrls: ["./family.component.scss"],
  animations: [
    trigger('slideInOut', [
      // transition(':enter', [
      //   style({ transform: 'translateX(-33%)' }),
      //   animate('200ms ease-in', style({ transform: 'translateX(0%)' }))
      // ]),
      transition(':leave', [
        animate('500ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class FamilyComponent implements OnInit {
  /* ************************************* Static Field ********************************************* */
  /* ************************************* Instance Field ******************************************* */
  public familyForm: FormGroup;
  public familyDto: FamilySpouseDto;
  public loaded: boolean;

  public showStep1: boolean;
  public showStep2: boolean;
  public showStep3: boolean;

  public activeStep: number;
  public steps = [1, 2];

  public addSpouse = false;

  @Input()
  lastName: string;

  @Output()
  pubSub = new EventEmitter<any>();

  /* ************************************* Constructors ******************************************** */
  constructor(private fb: FormBuilder,
    private familyApi: FamilyApi) { }

  /* ************************************* Public Methods ******************************************* */
  public ngOnInit(): void {
    this._getUser();
    this._resetSection();
    this.showStep1 = true;
    this.activeStep = 1;
  }

  public radioChange(e: MatRadioChange): void {
    this.addSpouse = e.value as boolean;
    this.steps = this.addSpouse ? [1, 2, 3] : [1, 2];
  }

  public saveUser(): void {
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

  public saveFamily(): void {
    if (this.familyForm?.value?.name) {
      const family = {} as FamilyVo;
      family.name = this.familyForm?.value?.name;
      this.familyApi.addUpdateFamily(family).subscribe(() => {
        this._notifyParent();
      });
    }
  }

  public saveFamilySpose(): void {
    const spouseFamily = {} as FamilySpouseDto;
    spouseFamily.spouse = {} as UserVo;
    spouseFamily.family = {} as FamilyVo;
    spouseFamily.role = 'COPARENT';
    spouseFamily.family.name = this.familyForm?.value?.name;
    spouseFamily.spouse.nameF = this.familyForm?.value?.nameF;
    spouseFamily.spouse.nameL = this.familyForm?.value?.nameL;
    spouseFamily.spouse.email = this.familyForm?.value?.email;
    spouseFamily.spouse.cell = this.familyForm?.value?.cell;
    this.familyApi.addUpdateFamilySpouse(spouseFamily).subscribe(() => {
      this._notifyParent();
    });
  }

  /* ************************************* Private Methods ****************************************** */
  private _initFamilyForm() {
    const familyName = 'The ' + this.lastName + ' Family';
    this.familyForm = this.fb.group({
      name: [
        familyName,
        Validators.compose([Validators.required])
      ],
      nameF: [
        this.familyDto.spouse.nameF,
        Validators.compose([Validators.required])
      ],
      nameL: [
        this.familyDto.spouse.nameL,
        Validators.compose([Validators.required])
      ],
      cell: [
        this.familyDto.spouse.cell,
        Validators.compose([Validators.required, Validators.maxLength(10),
        Validators.minLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
      ],
      email: [
        this.familyDto.spouse.email,
        Validators.compose([Validators.required, CustomValidators.email])
      ],
      role: [
        this.familyDto.role,
      ],
    });
  }

  private _getUser(): void {
    this.familyDto = {} as FamilySpouseDto;
    this.familyDto.family = {} as FamilyVo;
    this.familyDto.spouse = {} as UserVo;
    this._initFamilyForm();
    this.loaded = true;
  }

  private _resetSection(): void {
    this.showStep1 = false;
    this.showStep2 = false;
    this.showStep3 = false;
  }

  private _notifyParent(): void {
    const actionDto = <UiActionDto<boolean>>{
      action: 'FAMILY_SETUP_DONE',
      data: true
    };
    this.pubSub.emit(actionDto);
  }
}
