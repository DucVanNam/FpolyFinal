import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LayoutComponent } from './layout/layout.component';
import { LoginModule } from './login/login.module';
import { AntDesignModule } from './share/ant-design.module';
import { LayoutQuanLyComponent } from './layoutquanly/layoutquanly.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent, 
    LayoutComponent,
    LayoutQuanLyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    LoginModule,
    AntDesignModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  exports:[
    AppComponent,
    LayoutComponent
  ]
})
export class AppModule { }
