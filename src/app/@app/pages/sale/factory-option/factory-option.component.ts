import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-factory-option",
  templateUrl: "./factory-option.component.html",
  styleUrls: ["./factory-option.component.scss"]
})
export class FactoryOptionComponent implements OnInit {
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
