import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {TranslateModule} from '@ngx-translate/core';

import {SpinnerComponent} from './spinner.component';
import {SpinnerService} from './spinner.service';

const COMMON_MODULE = [CommonModule, FlexLayoutModule, TranslateModule.forChild()];
const MATERIAL_MODULE = [MatProgressSpinnerModule, MatIconModule];
const EG_MODULE = [];
const EG_COMPONENT = [SpinnerComponent];

@NgModule({
  imports: [...COMMON_MODULE, ...MATERIAL_MODULE, ...EG_MODULE],
  declarations: [...EG_COMPONENT],
  exports: [...EG_COMPONENT],
  providers: [SpinnerService]
})
export class SpinnerModule {
}
