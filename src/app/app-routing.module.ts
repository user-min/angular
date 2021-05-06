import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './route/login/layout/layout.component';
import {SiderMenuComponent} from './route/login/layout/sider-menu/sider-menu.component';
import {LoginComponent} from './route/login/login/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {path: 'sider-menu', component: SiderMenuComponent},
    ]
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {path: 'sider-menu', component: SiderMenuComponent},
    ]
  },
  {path: 'currency', loadChildren: './route/currency/currency.module#CurrencyModule'},
  {path: 'element', loadChildren: './route/element/element.module#ElementModule'},
  {path: 'practice', loadChildren: './route/practice/practice.module#PracticeModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})], // 初始化路由器，并让它监听浏览器地址变化
  exports: [RouterModule]
})
export class AppRoutingModule {
}
