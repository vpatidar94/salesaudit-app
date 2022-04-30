import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sale-edit",
  templateUrl: "./sale-edit.component.html",
  styleUrls: ["./sale-edit.component.scss"]
})
export class SaleEditComponent implements OnInit {
  /* ************************************* Static Field ******************************************** */
  /* ************************************* Instance Field ****************************************** */
  showSectionCustomer: boolean = false;
  showSectionVehicle: boolean = false;

  /* ************************************* Constructors ******************************************** */
  constructor() {
  }

  /* ************************************* Public Methods ****************************************** */
  public ngOnInit(): void {
    this._init();
  }

  public saveCustomer(): void {
    this._resetSection();
    this.showSectionVehicle = true;
  }

  public backToCustomer(): void {
    this._resetSection();
    this.showSectionCustomer = true;
  }

  /* ************************************* Private Methods ****************************************** */
  private _init(): void {
    this._resetSection();
    this.showSectionCustomer = true;
  }

  private _resetSection(): void { 
    this.showSectionCustomer = false;
    this.showSectionVehicle = false;
  }
}
