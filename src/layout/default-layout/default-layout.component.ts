import {Component, Injector, Input} from '@angular/core';
import {LayoutComponentBaseComponet} from '../component-base/layout-component-base.componet';

@Component({
  selector: 'default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.less']
})
export class DefaultLayoutComponent extends LayoutComponentBaseComponet {

  @Input()
  header: any;

  @Input()
  sidermenu: any;


  constructor(
    injector: Injector
  ) {
    super(injector);
  }

}
