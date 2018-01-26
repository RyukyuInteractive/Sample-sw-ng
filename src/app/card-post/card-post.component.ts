import { Component, Input, OnInit } from '@angular/core';
import { PostTitle } from '../interfaces/post';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit {

  @Input() title: PostTitle;

  constructor() {
  }

  ngOnInit() {
  }

}
