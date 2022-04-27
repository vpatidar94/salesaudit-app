import { Component, EventEmitter, Output, ViewChild, Input } from '@angular/core';
import { CropperSettings, ImageCropperComponent } from 'ngx-img-cropper';
import { UiActionDto } from '../../dto/ui-action.dto';

/**
 * @title AlertMessage / Snack-bar with a custom component
 */
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {

  /* ************************************ Static Fields ************************************ */
  /* ************************************ Instance Fields ************************************ */
  @Input()
  data: any;
  cropperSettings: CropperSettings;

  @Output()
  pubSub = new EventEmitter<any>();

  @ViewChild('cropper')
  cropper: ImageCropperComponent;

  /* ************************************ Constructors ************************************ */
  constructor() {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 100;
    this.cropperSettings.height = 100;
    this.cropperSettings.croppedWidth = 100;
    this.cropperSettings.croppedHeight = 100;
    this.cropperSettings.canvasWidth = 400;
    this.cropperSettings.canvasHeight = 300;
    this.cropperSettings.rounded = true;
    this.cropperSettings.cropperClass = "cropper-img";
    this.cropperSettings.noFileInput = true;
    this.data = {};
  }

  /* ************************************ Public Methods ************************************ */
  fileChangeListener($event: any) {
    var image: any = new Image();
    var file: File = $event.target.files[0];
    var myReader: FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent: any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);
    };

    myReader.readAsDataURL(file);
  }

  public cropped() {
    const actionDto = <UiActionDto<string>>{
      action: 'IMAGE_ADDED',
      data: this.data.image
    };
    this.pubSub.emit(actionDto);
  }
}
