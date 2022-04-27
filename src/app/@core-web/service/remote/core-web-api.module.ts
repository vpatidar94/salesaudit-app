import {NgModule} from '@angular/core';
import { AuthApi } from './auth.api';
import { UserApi } from './user.api';


@NgModule({
  imports: [],
  declarations: [],
  providers: [
    UserApi, AuthApi
  ],
  exports: []
})
export class CoreWebApiModule {
}
