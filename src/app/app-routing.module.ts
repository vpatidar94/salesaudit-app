import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './@app/pages/layout/auth-layout/auth-layout.component';
import { LayoutComponent } from './@app/pages/layout/layout.component';
import { AuthGuard } from './@core-web/security/auth.guard';
import { LoggedInAuthGuard } from './@core-web/security/logged-in-auth.guard';

const routes: Routes = [
  // {
  //   path: 'signin',
  //   canActivate: [LoggedInAuthGuard],
  //   component: SigninComponent
  // },
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import("./@app/pages/dashboard/dashboard.module").then(m => m.DashboardModule)
      },
      {
        path: 'sale',
        loadChildren: () =>
          import("./@app/pages/sale/sale.module").then(m => m.SaleModule)
      },
    ] 
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    canActivate: [LoggedInAuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import("../app/@app/pages/session/session.module").then(m => m.SessionModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
