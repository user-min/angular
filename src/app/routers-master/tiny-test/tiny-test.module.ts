import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditorModule} from '@tinymce/tinymce-angular';
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
    EditorModule
  ]
})
export class TinyTestModule { }
