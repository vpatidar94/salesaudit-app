import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";

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
  showSectionFactory: boolean = false;
  showSectionInstallation: boolean = false;
  showSectionTrade: boolean = false;

  /* ************************************* Constructors ******************************************** */
  constructor(private platform: Platform,
    private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this._handleBackButton();
    });
  }


  /* ************************************* Public Methods ****************************************** */
  public ngOnInit(): void {
    this._init();
  }

  public saveCustomer(): void {
    this._resetSection();
    this.showSectionVehicle = true;
  }

  public saveVehicle(): void {
    this._resetSection();
    this.showSectionFactory = true;
  }

  public saveFactory(): void {
    this._resetSection();
    this.showSectionInstallation = true;
  }

  public saveTrade(): void {
    this._resetSection();
    this.showSectionTrade = true;
  }

  public backToCustomer(): void {
    this._resetSection();
    this.showSectionCustomer = true;
  }

  public backToVehicle(): void {
    this._resetSection();
    this.showSectionVehicle = true;
  }

  public backToFactory(): void {
    this._resetSection();
    this.showSectionFactory = true;
  }

  public backToInstallation(): void {
    this._resetSection();
    this.showSectionInstallation = true;
  }

  /* ************************************* Private Methods ****************************************** */
  private _init(): void {
    this._resetSection();
    this.showSectionCustomer = true;
  }

  private _resetSection(): void {
    this.showSectionCustomer = false;
    this.showSectionVehicle = false;
    this.showSectionFactory = false;
    this.showSectionInstallation = false;
    this.showSectionTrade = false;
  }

  private _handleBackButton(): void {
    if (this.showSectionVehicle) {
      this.backToCustomer();
    } else if (this.showSectionFactory) {
      this.backToVehicle();
    } else if (this.showSectionInstallation) {
      this.backToFactory();
    } else if (this.showSectionTrade) {
      this.backToInstallation();
    } else {
      this.router.navigate['/sale'];
    }
  }
}
