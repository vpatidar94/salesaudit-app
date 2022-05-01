import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RemoteApiModule } from '../../service/remote/remote-api.module';
import { ChartsModule } from 'ng2-charts';
import { MatChipsModule } from "@angular/material/chips";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { SaleRoutingModule } from './sale-routing.module';
import { SaleComponent } from './sale.component';
import { SaleEditComponent } from './sale-edit.component';
import { CustomerComponent } from './customer/customer.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { FactoryOptionComponent } from './factory-option/factory-option.component';
import { InstallationComponent } from './intallation/intallation.component';
import { TradeComponent } from './trade/trade.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleRoutingModule,
    MatButtonModule,
    MatIconModule, 
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatTabsModule,
    MatDialogModule,
    MatExpansionModule,
    MatChipsModule,
    FlexLayoutModule,
    ChartsModule,
    RemoteApiModule,
    MatCheckboxModule
  ],
  declarations: [SaleComponent, SaleEditComponent, CustomerComponent, VehicleComponent,
    FactoryOptionComponent, InstallationComponent, TradeComponent],
})
export class SaleModule { }
