import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {RootRoutingModule} from './root.routing.module';
import {IconsProviderModule} from './shared/icon';
import {RootComponent} from './root.component';

import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    RootRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [RootComponent]
})
export class RootModule {
}
