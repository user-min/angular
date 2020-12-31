import { Component, OnInit } from '@angular/core';
import {NzFormatEmitEvent} from 'ng-zorro-antd';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.less']
})
export class TreeComponent implements OnInit {
  // 树节点
  trees = [
    {
      title: '标题1',
      key: '100',
      expanded: true,
      children: [
        { title: '内容1', key: '1000', isLeaf: true },
        { title: '内容2', key: '1001', isLeaf: true }
      ]
    },
    {
      title: '标题2',
      key: '101',
      expanded: true,
      children: [
        { title: '内容3', key: '1010', isLeaf: true },
        { title: '内容4', key: '1011', isLeaf: true }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  s($event: NzFormatEmitEvent) {
    console.log(1)
  }
}
