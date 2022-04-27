import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TranslateModule} from '@ngx-translate/core';

import {AlertMessageWebComponent} from './alert-message-web.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";

const COMMON_MODULE = [CommonModule, FlexLayoutModule, TranslateModule.forChild()];
const MATERIAL_MODULE = [MatCardModule, MatIconModule, MatSnackBarModule];
const EG_MODULE = [];
const EG_COMPONENT = [AlertMessageWebComponent]; // AlertMessageComponent

@NgModule({
  imports: [...COMMON_MODULE, ...MATERIAL_MODULE, ...EG_MODULE],
  declarations: [...EG_COMPONENT],
  exports: [...EG_COMPONENT]
})
export class AlertMessageModule {
}
