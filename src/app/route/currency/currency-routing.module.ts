import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CropperComponent} from './cropper/cropper.component';


const routes: Routes = [
  // 图片裁剪
  {path: '', redirectTo: 'cropper', pathMatch: 'full'},
  {path: 'currency/cropper', component: CropperComponent, data: {breadcrumb: '图片裁剪'}}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule { }
