import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditorModule} from '@tinymce/tinymce-angular';
import {NgZorroAntdModule, NzSpinModule} from 'ng-zorro-antd';
import {ImageCropperModule} from 'ngx-image-cropper';
import {CropperComponent} from './cropper/cropper.component';

import { TinyTestRoutingModule } from './tiny-test-routing.module';
import { TinyEditorComponent } from './tiny-editor/tiny-editor.component';


@NgModule({
  declarations: [
    TinyEditorComponent,
    CropperComponent
  ],
  imports: [
    CommonModule,
    TinyTestRoutingModule,
    EditorModule,
    NzSpinModule,
    ImageCropperModule,
    NgZorroAntdModule
  ]
})
export class TinyTestModule { }
