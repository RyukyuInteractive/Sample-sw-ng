import { Component, Input, OnInit } from '@angular/core';
import { PostContent, PostExcerpt, PostTitle } from '../interfaces/post';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit {

  @Input() categories: number[];
  @Input() title: PostTitle;
  @Input() date: string;
  @Input() excerpt: PostExcerpt;
  @Input() content: PostContent;
  @Input() id: number;

  public isHide = true;

  constructor() {
  }

  getCategory(number) {
    switch (number) {
      case 2:
        return 'プレスリリース';
      case 3:
        return 'お知らせ';
    }
  }

  public get routerLink() {
    return `/post/${this.id}`;
  }

  public ngOnInit() {
  }

}
