import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-vehicle",
  templateUrl: "./vehicle.component.html",
  styleUrls: ["./vehicle.component.scss"]
})
export class VehicleComponent implements OnInit {
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
