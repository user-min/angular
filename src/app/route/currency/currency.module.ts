import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ImageCropperModule} from 'ngx-image-cropper';
import {CropperComponent} from './cropper/cropper.component';

import { CurrencyRoutingModule } from './currency-routing.module';


@NgModule({
  declarations: [
    CropperComponent
  ],
  exports: [
    CropperComponent
  ],
    imports: [
        CommonModule,
        CurrencyRoutingModule,
        NgZorroAntdModule,
        ImageCropperModule,
        FormsModule
    ]
})
export class CurrencyModule { }
