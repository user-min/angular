import { NgModule } from '@angular/core';
import {EditorModule} from '@tinymce/tinymce-angular';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CurrencyModule} from '../currency/currency.module';
import {BannerComponent} from './banner/banner.component';

import { ElementRoutingModule } from './element-routing.module';
import {FormComponent} from './form/form.component';
import {TinyEditorComponent} from './tiny-editor/tiny-editor.component';
import {TreeComponent} from './tree/tree.component';


@NgModule({
  declarations: [
    BannerComponent,
    TinyEditorComponent,
    TreeComponent,
    FormComponent
  ],
  imports: [
    ElementRoutingModule,
    EditorModule,
    NgZorroAntdModule,
    CurrencyModule
  ]
})
export class ElementModule { }
