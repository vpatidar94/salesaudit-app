import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChildApi } from '../../service/remote/child.api';
import { MemoApi } from '../../service/remote/memo.api';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
})
export class SaleComponent implements OnInit {

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

  public addSale(): void {
    this.router.navigate(['/sale/add-update']);
  }

  /* ************************************* Private Methods ****************************************** */
  private _init(): void {
  }
}
