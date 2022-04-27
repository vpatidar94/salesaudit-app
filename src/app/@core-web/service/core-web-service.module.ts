import {NgModule} from '@angular/core';
import {AuthHttpInterceptor} from './auth-http.interceptor';
import { GlobalEmitterService } from './global-emitter.service';
import { CoreWebApiModule } from './remote/core-web-api.module';


@NgModule({
  imports: [CoreWebApiModule],
  declarations: [],
  providers: [
    AuthHttpInterceptor,
    GlobalEmitterService
  ],
  exports: []
})
export class CoreWebServiceModule {
}
