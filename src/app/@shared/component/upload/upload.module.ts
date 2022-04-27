import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule } from '@ngx-translate/core';
import { ImageCropperModule } from "ngx-img-cropper";
import { UploadComponent } from './upload.component';


const COMMON_MODULE = [CommonModule, FlexLayoutModule, TranslateModule.forChild()];
const MATERIAL_MODULE = [MatCardModule, MatIconModule, MatButtonModule];
const EG_MODULE = [ImageCropperModule];
const EG_COMPONENT = [UploadComponent]; // AlertMessageComponent

@NgModule({
  imports: [...COMMON_MODULE, ...MATERIAL_MODULE, ...EG_MODULE],
  declarations: [...EG_COMPONENT],
  exports: [...EG_COMPONENT]
})
export class UploadModule {
}
