import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TINYMCE_SCRIPT_SRC} from '@tinymce/tinymce-angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {ServiceModule} from './core/service/service.module';
import {CurrencyModule} from './route/currency/currency.module';
import {ElementModule} from './route/element/element.module';

// 引入自己添加的模块与组件
import {LayoutComponent} from './route/login/layout/layout.component';
import {SiderMenuComponent} from './route/login/layout/sider-menu/sider-menu.component';
import {LoginComponent} from './route/login/login/login.component';
import {PracticeModule} from './route/practice/practice.module';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,

    // 引入自己添加的组件
    LoginComponent,
    LayoutComponent,
    SiderMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // 路由
    NgZorroAntdModule,  // 组件库
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // 引入自己添加的模块
    ElementModule,
    PracticeModule,
    CurrencyModule,
    ServiceModule
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: zh_CN
    },
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'assets/tinymce/tinymce.min.js' }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
