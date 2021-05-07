import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './route/login/layout/layout.component';
import {LoginComponent} from './route/login/login/login.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
 /* // 本方法添加页面到导航，失败
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {path: 'currency', loadChildren: './route/currency/currency.module#CurrencyModule'},
      {path: 'element', loadChildren: './route/element/element.module#ElementModule'},
      {path: 'practice', loadChildren: './route/practice/practice.module#PracticeModule'}
    ]
  }*/
  {
    path: 'layout',
    component: LayoutComponent,
    loadChildren: () => import('./route/currency/currency.module').then(currency => currency.CurrencyModule)

  },
  {
    path: 'layout',
    component: LayoutComponent,
    loadChildren: () => import('./route/element/element.module').then(element => element.ElementModule)
  },
  {
    path: 'layout',
    component: LayoutComponent,
    loadChildren: () => import('./route/practice/practice.module').then(practice => practice.PracticeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})], // 初始化路由器，并让它监听浏览器地址变化
  exports: [RouterModule]
})
export class AppRoutingModule {
}
