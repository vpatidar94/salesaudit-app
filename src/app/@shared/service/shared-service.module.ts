import {NgModule} from '@angular/core';
import {KeyValueStorageService} from './key-value-storage.service';
import {CoreWebModule} from '../../@core-web/core-web.module';


@NgModule({
  imports: [CoreWebModule],
  declarations: [],
  providers: [
    KeyValueStorageService
  ],
  exports: []
})
export class SharedServiceModule {
}
