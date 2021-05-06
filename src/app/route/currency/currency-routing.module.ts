import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CropperComponent} from './cropper/cropper.component';


const routes: Routes = [
  {path: 'cropper', component: CropperComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule { }
