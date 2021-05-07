import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CropperComponent} from '../currency/cropper/cropper.component';
import {FirstComponent} from '../practice/first/first.component';
import {SecondComponent} from '../practice/second/second.component';
import {BannerComponent} from './banner/banner.component';
import {FormComponent} from './form/form.component';
import {TinyEditorComponent} from './tiny-editor/tiny-editor.component';
import {TreeComponent} from './tree/tree.component';


const routes: Routes = [
  {path: '', component: TinyEditorComponent},
  {path: 'element/banner', component: BannerComponent, data: {breadcrumb: '轮播图'}},
  {path: 'element/form', component: FormComponent, data: {breadcrumb: '表单'}},
  {path: 'element/tiny-editor', component: TinyEditorComponent, data: {breadcrumb: '富文本编辑器'}},
  {path: 'element/tree', component: TreeComponent, data: {breadcrumb: '树'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementRoutingModule { }
