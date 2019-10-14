import {NgModule} from '@angular/core';

import {NgZorroAntdModule} from 'ng-zorro-antd';

import {DefaultLayoutComponent} from './default';
import {IconsProviderModule} from '../shared';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    IconsProviderModule,
    NgZorroAntdModule,
  ],
  declarations: [
    DefaultLayoutComponent,
  ],
  exports: [
    DefaultLayoutComponent,
  ]
})
export class LayoutModule {

}
