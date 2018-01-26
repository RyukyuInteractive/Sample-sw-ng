import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-view-home-posts',
  templateUrl: './view-home-post-list.component.html',
  styleUrls: ['./view-home-post-list.component.css']
})
export class ViewHomePostListComponent implements OnInit {

  constructor(public posts: PostsService) {
  }

  ngOnInit() {
    this.posts.fetch();
  }

}
