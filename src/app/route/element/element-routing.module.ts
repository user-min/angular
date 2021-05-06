import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstComponent} from '../practice/first/first.component';
import {SecondComponent} from '../practice/second/second.component';
import {BannerComponent} from './banner/banner.component';
import {FormComponent} from './form/form.component';
import {TinyEditorComponent} from './tiny-editor/tiny-editor.component';
import {TreeComponent} from './tree/tree.component';


const routes: Routes = [
  {path: '', component: TinyEditorComponent},
  {path: 'banner', component: BannerComponent},
  {path: 'form', component: FormComponent},
  {path: 'tiny-editor', component: TinyEditorComponent},
  {path: 'tree', component: TreeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementRoutingModule { }
