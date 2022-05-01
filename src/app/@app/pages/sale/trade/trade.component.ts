import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-trade",
  templateUrl: "./trade.component.html",
  styleUrls: ["./trade.component.scss"]
})
export class TradeComponent implements OnInit {
  /* ************************************* Static Field ******************************************** */
  /* ************************************* Instance Field ****************************************** */

  /* ************************************* Constructors ******************************************** */
  constructor() {
  }

  /* ************************************* Public Methods ****************************************** */
  ngOnInit(): void {
    this._init();
  }

  /* ************************************* Private Methods ****************************************** */
  private _init(): void {
  }
}
