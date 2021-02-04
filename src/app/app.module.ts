import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';

// 引入自己添加的模块与组件
import {RouteModule} from './route/route.module';
import {TinyTestModule} from './routers-master/tiny-test/tiny-test.module';
import { FirstComponent } from './routeTest/first/first.component';
import { SecondComponent } from './routeTest/second/second.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,

    // 引入自己添加的组件
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // 路由
    NgZorroAntdModule,  // 组件库
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // 引入自己添加的模块
    RouteModule,
    TinyTestModule,
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: zh_CN
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
