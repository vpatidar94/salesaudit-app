import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/@shared/dto/api-response.dto';
import { environment } from 'src/environments/environment';
import { NOTE_CATEGORY } from '../../const/note-category';
import { ChildApi } from '../../service/remote/child.api';
import { MemoApi } from '../../service/remote/memo.api';
import { ChildVo } from '../../vo/child.vo';
import { MemoVo } from '../../vo/memo.vo';

@Component({
  selector: 'app-note-edit-v2',
  templateUrl: './note-edit-v2.component.html',
  styleUrls: ['./note-edit-v2.component.scss'],
})
export class NoteEditV2Component implements OnInit {

  checked = true;
  uncheck = false;
  myControl = new FormControl();
  showTags = true;
  childList: Array<ChildVo>;
  filterChildList: Array<ChildVo>;
  showDiv = {
    tagsMobile: false,
    SearchNote: false,
    children: false
  }
  FilterCheckbox = "";
  memoCategory = NOTE_CATEGORY;

  chipControl = new FormControl(new Set());
  get chips() { return this.chipControl.value; }

  public memoForm: FormGroup;

  public selectedFile: FileList;
  public url = environment.bucket;

  showSectionNote: boolean;
  showSectionChild: boolean;
  showSectionTag: boolean;

  constructor(private router: Router, private childApi: ChildApi,
    private fb: FormBuilder,
    private memoApi: MemoApi) { }

  /* ************************************* Public Methods ****************************************** */
  ngOnInit(): void {
    this._init();
  }

  public addChild(): void {
    this._resetSection();
    this.showSectionChild = true;
  }

  public addTag(): void {
    this._resetSection();
    this.showSectionTag = true;
  }

  public addNote(): void {
    // this._init();
    this._resetSection();
    this.showSectionNote = true;
  }

  public removeChild(): void {
    this.remove();
    this.addNote();
    // this._init();
  }

  applyFilter(val: any) {
    this.FilterCheckbox = val;
  }

  public displayFn(child: ChildVo): string {
    return `${child?.nameF ?? ''} ${child?.nameL ?? ''}`;
  }

  public selectFile(event: any) {
    this.selectedFile = event.target.files;
  }

  public filterChild(value): void {
    this.filterChildList = this._filter(value);
  }

  public toggleChip = (chip: any) => {
    const addChip = () => { this.chips.add(chip); };
    const removeChip = () => { this.chips.delete(chip); };

    this.chips.has(chip) ? removeChip() : addChip();
  }

  public remove(): void {
    this.memoForm.patchValue({
      child: null
    });
  }

  public removeTag(): void {
    this.chipControl = new FormControl(new Set());
    this.addNote();
  }

  public saveMemo(): void {
    if (this.memoForm.valid) {
      const vo = {} as MemoVo;
      vo.tag = [] as Array<string>;
      vo.name = this.memoForm.value.name;
      vo.childSfid = this.memoForm.value.child?.sfid;
      vo.note = this.memoForm.value.note;
      vo.tag.push(...this.chips);
      this.memoApi.addUpdateMemo(vo).subscribe((res: ApiResponse<MemoVo>) => {
        this._uploadMemoMedia(res.body?.memoId);
        // this._init();
        console.log("xxx xx xx xx xfodnd done");
        this.router.navigate(['/note']);
      });
    }
  }

  /* ************************************* Private Methods ****************************************** */
  private _init(): void {
    this._resetSection();
    this.showSectionNote = true;
    this._getChildList();
    this._initForm();
    this.chips.clear();
  }

  private _resetSection() {
    this.showSectionChild = false;
    this.showSectionNote = false;
    this.showSectionTag = false;
  }

  private _uploadMemoMedia(memoId: string) {
    let percentage = 0;
    if (this.selectedFile) {
      const currentFileUpload = this.selectedFile.item(0);
      this.memoApi.pushMemoImage(currentFileUpload, memoId, 'MEMO').subscribe(event => {
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

  private _initForm(): void {
    this.memoForm = this.fb.group({
      child: [
        null,
        Validators.compose([Validators.required])
      ],
      name: [
        null,
        Validators.compose([Validators.required])
      ],
      note: [
        null,
        Validators.compose([Validators.required])
      ],
    });
  }
  OpenUrlNotelist() {
    window.location.href = "/apps/notes";
  }
  private _getChildList() {
    this.filterChildList = [] as Array<ChildVo>;
    this.childList = [] as Array<ChildVo>;
    this.childApi.getChildList().subscribe((res: ApiResponse<Array<ChildVo>>) => {
      this.childList = res.body;
      this.filterChildList = res.body;
    });
  }

  private _filter(value: string): Array<ChildVo> {
    const filterValue = value.toLowerCase();
    return this.childList?.filter(it => it?.nameF?.toLowerCase()?.includes(filterValue) ||
      it?.nameL?.toLowerCase()?.includes(filterValue));
  }

  public showNote(): void {
    this.router.navigate(['/note']);
  }

}
