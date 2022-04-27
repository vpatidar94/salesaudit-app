import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChildApi } from '../../service/remote/child.api';
import { MemoApi } from '../../service/remote/memo.api';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {

  /* ************************************* Static Field ******************************************** */
  /* ************************************* Instance Field ****************************************** */


  /* ************************************* Constructors ******************************************** */
  constructor(private memoAPi: MemoApi,
    private router: Router,
    private childApi: ChildApi) {
  }

  /* ************************************* Public Methods ****************************************** */
  public ngOnInit(): void {
    this._init();
  }

  /* ************************************* Private Methods ****************************************** */
  private _init(): void {
  }
}
