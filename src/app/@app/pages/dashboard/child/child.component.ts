import { animate, style, transition, trigger } from "@angular/animations";
import { HttpEventType, HttpResponse } from "@angular/common/http";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ChildApi } from "src/app/@app/service/remote/child.api";
import { MemoApi } from "src/app/@app/service/remote/memo.api";
import { ChildVo } from "src/app/@app/vo/child.vo";
import { ApiResponse } from "src/app/@shared/dto/api-response.dto";
import { UiActionDto } from "src/app/@shared/dto/ui-action.dto";
import { environment } from '../../../../../environments/environment';
@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"],
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
export class ChildComponent implements OnInit {
  /* ************************************* Static Field ********************************************* */
  /* ************************************* Instance Field ******************************************* */
  public childForm: FormGroup;
  url = environment.bucket;

  @Output()
  pubSub = new EventEmitter<any>();

  child: ChildVo;
  childList: Array<ChildVo>;

  now = new Date();
  file: File;
data: any;
  /* ************************************* Constructors ******************************************** */
  constructor(private fb: FormBuilder,
    private childApi: ChildApi,
    private memoApi: MemoApi) { }

  /* ************************************* Public Methods ******************************************* */
  public ngOnInit(): void {
    this._init();
  }

  public saveChild(): void {
    this.child = {} as ChildVo;
    this.child.nameF = this.childForm.value.nameF;
    this.child.nameL = this.childForm.value.nameL;
    this.child.dob = this.childForm.value.dob;
    this.child.careLevel = this.childForm.value.careLevel;
    this.childApi.addUpdateChild(this.child).subscribe((res: ApiResponse<ChildVo>) => {
      // this._init();
      if (res.body.childId) {
        this._uploadChildMedia(res.body.childId, this.file);
      }
    });
  }

  public setupDone(): void {
    this.saveChild();
    this._notifyParent();
  }

  public actionUpload(event: UiActionDto<string>): void {
    if (event.action === 'IMAGE_ADDED') {
      const img = event.data;
      this.file = new File([this.convertDataUrlToBlob(img)], "1", { type: `image/png` });
    }
  }

  public convertDataUrlToBlob(dataUrl): Blob {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new Blob([u8arr], { type: mime });
  }

  /* ************************************* Private Methods ****************************************** */
  private _initChildForm() {
    this.childForm = this.fb.group({
      nameF: [
        this.child.nameF,
        Validators.compose([Validators.required])
      ],
      nameL: [
        this.child.nameL,
        Validators.compose([Validators.required])
      ],
      dob: [
        this.child.dob,
      ],
      careLevel: [
        this.child.careLevel,
      ],
    });
  }

  private _init() {
    this.child = {} as ChildVo;
    this.data = {} as any;
    this._initChildForm();
    this._getChild();
  }

  private _notifyParent(): void {
    const actionDto = <UiActionDto<boolean>>{
      action: 'SETUP_DONE',
      data: true
    };
    this.pubSub.emit(actionDto);
  }

  private _getChild(): void {
    this.childList = [] as Array<ChildVo>
    this.childApi.getChildList().subscribe(res => {
      this.childList = res.body;
    });
  }

  private _uploadChildMedia(childId: string, file: File) {
    let percentage = 0;
    if (file) {
      this.memoApi.pushMemoImage(file, childId, 'CHILD').subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          // this.activeLoader = false;
          this._init();
          console.log('File is completely uploaded!');
        }
      });
    } else {
      // this.activeLoader = false;
      this._init();
    }
  }
}
