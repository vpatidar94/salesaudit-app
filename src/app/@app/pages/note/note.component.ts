import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/@shared/dto/api-response.dto';
import { environment } from 'src/environments/environment';
import { ChildApi } from '../../service/remote/child.api';
import { MemoApi } from '../../service/remote/memo.api';
import { ChildVo } from '../../vo/child.vo';
import { MemoVo } from '../../vo/memo.vo';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {

  /* ************************************* Static Field ******************************************** */
  /* ************************************* Instance Field ****************************************** */
  displayMode = "default";
  multi = false;
  hideToggle = true;

  noteList: Array<MemoVo>;

  public url = environment.bucket;
  public childList: Array<ChildVo>;

  /* ************************************* Constructors ******************************************** */
  constructor(private memoAPi: MemoApi,
    private router: Router,
    private childApi: ChildApi) {
  }

  /* ************************************* Public Methods ****************************************** */
  public ngOnInit(): void {
    this._init();
  }

  public onSelect(memo: MemoVo): void {

  }

  public addNote() {
    this.router.navigate(['/note/edit']);
  }

  public getSrc(sfid: string) {
    const childId = this.childList?.find(it => it.sfid === sfid)?.childId;
    console.log(`xxxx xxx xx   ${this.url}CHILD/${childId}`)
    return `${this.url}CHILD/${childId}`;
  }

  /* ************************************* Private Methods ****************************************** */
  private _init(): void {
    this._getMemoList();
    this._getChildList();
  }

  private _getMemoList() {
    this.noteList = [] as Array<MemoVo>;
    this.memoAPi.getMemoList().subscribe((res: ApiResponse<Array<MemoVo>>) => {
      this.noteList = res.body;
    });
  }

  private _getChildList() {
    this.childList = [] as Array<ChildVo>;
    this.childApi.getChildList().subscribe((res: ApiResponse<Array<ChildVo>>) => {
      this.childList = res.body;
    });
  }

}
