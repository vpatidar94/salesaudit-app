import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    MatSidenavModule
  ],
  declarations: [LayoutComponent, AuthLayoutComponent]
})
export class LayoutModule {}
