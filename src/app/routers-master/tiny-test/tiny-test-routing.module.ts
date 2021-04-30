import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TinyEditorComponent} from './tiny-editor/tiny-editor.component';


const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: 'tiny-editor'}, // 设置默认页面
  {path: 'tiny-editor', component: TinyEditorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TinyTestRoutingModule { }
