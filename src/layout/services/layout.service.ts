import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class LayoutService {

  /** 是否折叠 */
  isCollapsed: boolean;

  /** 导航菜单宽度 */
  siderWidth = '200px';

  constructor() {

  }

  /** 修改菜单折叠状态 */
  changeCollapsedState() {
    this.isCollapsed = !this.isCollapsed;
  }

}
