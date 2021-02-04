import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TinyTestRoutingModule } from './tiny-test-routing.module';
import { TinyEditorComponent } from './tiny-editor/tiny-editor.component';


@NgModule({
  declarations: [TinyEditorComponent],
  imports: [
    CommonModule,
    TinyTestRoutingModule
  ]
})
export class TinyTestModule { }
