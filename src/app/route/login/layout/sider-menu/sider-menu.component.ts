import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sider-menu',
  templateUrl: './sider-menu.component.html',
  styleUrls: ['./sider-menu.component.less']
})
export class SiderMenuComponent implements OnInit {
  @Input() menus = [];

  @Input() isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

  // 选择一项菜单
  selectedMenu(menu) {
    this.cancelSelected(this.menus);
    menu.selected = true;

  }

  // 取消其他菜单选中
  cancelSelected(menus) {
    if (menus && menus.length > 0) {
      menus.forEach((item) => {
        item.selected = false;
        this.cancelSelected(item.childList);
      });
    }
  }
}
