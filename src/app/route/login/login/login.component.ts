import { Component, OnInit } from '@angular/core';
import {Base64} from 'js-base64';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  jumpToMenu() {
    const object = {
      param: '参数'
    }
    this.router.navigate([`/layout`]);
  }
}
