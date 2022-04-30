import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleEditComponent } from './sale-edit.component';
import { SaleComponent } from './sale.component';

const routes: Routes = [
  {
    path: '',
    component: SaleComponent
  },
  {
    path: 'add-update',
    component: SaleEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleRoutingModule { }
