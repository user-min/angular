import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AllService} from '../../../core/service/all.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  // 展开收起按钮true展开，false收起
  isCollapsed = false;

  // 面包屑展示
  breadcrumbState = false;

  // 左侧导航数据
  siderData = [
    {
      id: '1',
      icon: 'appstore',
      title: '通用',
      // router: '/currency',
      open: false,
      selected: false,
      childList: [
        {
          id: '1-1',
          icon: 'picture',
          title: '图片裁剪',
          router: '/layout/currency/cropper',
          open: false,
          selected: false,
          childList: []
        },
      ]
    },
    {
      id: '2',
      icon: 'printer',
      title: '组件',
      // router: '/element',
      open: false,
      selected: false,
      childList: [
        {
          id: '2-1',
          icon: 'picture',
          title: '轮播图',
          router: '/layout/element/banner',
          open: false,
          selected: false,
          childList: []
        },
        {
          id: '2-2',
          icon: 'form',
          title: '表单',
          router: '/layout/element/form',
          open: false,
          selected: false,
          childList: []
        },
        {
          id: '2-3',
          icon: 'edit',
          title: '富文本编辑器',
          router: '/layout/element/tiny-editor',
          open: false,
          selected: false,
          childList: []
        },
        {
          id: '2-4',
          icon: 'menu',
          title: '显示树',
          router: '/layout/element/tree',
          open: false,
          selected: false,
          childList: []
        },
      ]
    },
    {
      id: '3',
      icon: 'user',
      title: '练习',
      // router: '/practice',
      open: false,
      selected: false,
      childList: [
        {
          id: '3-1',
          icon: 'team',
          title: '一',
          router: '/layout/practice/first',
          open: false,
          selected: false,
          childList: []
        },
        {
          id: '3-2',
          icon: 'user',
          title: '二',
          router: '/layout/practice/second',
          open: false,
          selected: false,
          childList: []
        }
      ]
    },
  ];

  constructor(private allService: AllService) { }

  ngOnInit() {
  }

  // 订阅面包屑变化
  addBreadcrumbChange(): void {
    this.allService.getBreadcrumbState().subscribe((State) => {
      this.breadcrumbState = State;
    });
  }

  ngAfterViewInit() {
    // 异步更新方式
    Promise.resolve(null).then(() => {
      this.addBreadcrumbChange();
    });
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
}
