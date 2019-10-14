import {Injector} from '@angular/core';
import {LayoutService} from '../services';

export abstract class LayoutComponentBaseComponet {

  layoutService: LayoutService;

  constructor(injector: Injector) {
    this.layoutService = injector.get(LayoutService);
  }
}
