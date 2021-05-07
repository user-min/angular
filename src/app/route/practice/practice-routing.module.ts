import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CropperComponent} from '../currency/cropper/cropper.component';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';


const routes: Routes = [
  {path: '', component: FirstComponent},
  {path: 'practice/first', component: FirstComponent, data: {breadcrumb: '一'}},
  {path: 'practice/second', component: SecondComponent, data: {breadcrumb: '二'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule {
}
