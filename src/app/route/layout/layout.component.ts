import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  // 展开收起按钮true展开，false收起
  isCollapsed = false;

  // 左侧导航数据
  siderData = [
    {
      id: '1',
      icon: 'account-book',
      title: '账号管理',
      router: '/page/account',
      open: false,
      selected: false,
      childList: []
    },
    {
      id: '1',
      icon: 'wallet',
      title: '设备管理',
      router: '/page/device/0',
      open: false,
      selected: false,
      childList: []
    },
    {
      id: '1',
      icon: 'user',
      title: '人员管理',
      router: '/page/group/0',
      open: false,
      selected: false,
      childList: [
        {
          id: '1',
          icon: 'team',
          title: '分组管理',
          router: '/page/group/0',
          open: false,
          selected: false,
          childList: []
        },
        {
          id: '2',
          icon: 'user',
          title: '人员信息',
          router: '/page/people/0',
          open: false,
          selected: false,
          childList: []
        }
      ]
    },
    {
      id: '1',
      icon: 'audit',
      title: '记录管理',
      router: '/page/record',
      open: false,
      selected: false,
      childList: []
    },
    {
      id: '5',
      icon: 'setting',
      title: '系统设置',
      router: '/page/system',
      open: false,
      selected: false,
      childList: []
    },
    {
      id: '6',
      icon: 'api',
      title: '开放接口',
      router: 'impl-token',
      open: false,
      selected: false,
      childList: []
    },
    {
      id: '7',
      icon: 'control',
      title: '回调接口',
      router: '/page/open-impl',
      open: false,
      selected: false,
      childList: []
    },
    {
      id: '8',
      icon: 'book',
      title: '日志',
      router: '/page/log',
      open: false,
      selected: false,
      childList: []
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
}
