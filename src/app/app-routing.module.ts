import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FirstComponent} from './routeTest/first/first.component';
import {SecondComponent} from './routeTest/second/second.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'tiny-editor'}, // 设置默认页面
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  // {path: 'error', component: ErrorComponent}// 出错页面跳转
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
