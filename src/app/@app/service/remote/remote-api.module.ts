import {NgModule} from '@angular/core';
import { ChildApi } from './child.api';
import { FamilyApi } from './family.api';
import { MemoApi } from './memo.api';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    FamilyApi, ChildApi, MemoApi
  ],
  exports: []
})
export class RemoteApiModule {
}
