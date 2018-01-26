import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {

  public navLinks = [
    {
      label: '全て',
      path: '/'
    }, {
      label: 'お知らせ',
      path: '/news'
    }, {
      label: 'プレスリリース',
      path: '/press-release'
    }];

  constructor() {
  }

  public onChangeRouteClick() {
    window.scrollTo(0, 0);
  }

  public ngOnInit() {
  }

}
