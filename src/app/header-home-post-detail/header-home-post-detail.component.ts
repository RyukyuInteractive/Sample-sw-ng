import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-home-post-detail',
  templateUrl: './header-home-post-detail.component.html',
  styleUrls: ['./header-home-post-detail.component.css']
})
export class HeaderHomePostDetailComponent implements OnInit {

  constructor(private location: Location) {
  }

  public onLocationBackClick() {
    this.location.back();
  }

  ngOnInit() {
  }

}
