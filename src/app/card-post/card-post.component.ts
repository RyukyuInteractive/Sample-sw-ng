import { Component, Input, OnInit } from '@angular/core';
import { PostContent, PostTitle } from '../interfaces/post';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit {

  @Input() title: PostTitle;
  @Input() date: string;
  @Input() content: PostContent;
  @Input() id: number;

  public isHide = true;

  constructor() {
  }

  public get routerLink() {
    return `/post/${this.id}`;
  }

  public onOpenClick() {
    this.isHide = !this.isHide;
  }

  public ngOnInit() {
  }

}
