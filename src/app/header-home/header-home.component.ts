import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {
  public navLinks = [
    {
      label: 'home',
      path: '/'
    }];

  constructor() { }

  ngOnInit() {
  }

}
