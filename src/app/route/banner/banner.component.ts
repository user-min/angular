import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less']
})
export class BannerComponent implements OnInit {
  array = [1, 2, 3, 4];
  constructor() { }

  ngOnInit() {
  }

}
