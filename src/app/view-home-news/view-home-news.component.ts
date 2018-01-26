import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-view-home-news',
  templateUrl: './view-home-news.component.html',
  styleUrls: ['./view-home-news.component.css']
})
export class ViewHomeNewsComponent implements OnInit {

  constructor(public posts: PostsService) {
  }

  ngOnInit() {
    this.posts.fetch();
  }

}
