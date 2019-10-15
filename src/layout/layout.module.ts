import {NgModule} from '@angular/core';

import {NgZorroAntdModule} from 'ng-zorro-antd';

import {DefaultLayoutComponent} from './default-layout';
import {IconsProviderModule} from '../shared';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
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
