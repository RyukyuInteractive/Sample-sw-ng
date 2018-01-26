import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from '../services/posts.service';
import { PostContent, PostTitle } from '../interfaces/post';

@Component({
  selector: 'app-view-home-post-detail',
  templateUrl: './view-home-post-detail.component.html',
  styleUrls: ['./view-home-post-detail.component.css']
})
export class ViewHomePostDetailComponent implements OnInit {
  public title: PostTitle;
  public content: PostContent;
  public isLoading = true;

  constructor(
    private router: ActivatedRoute,
    public posts: PostsService) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.router.params
      .take(1)
      .subscribe(params => {
        const doc = this.posts.docsMap.get(params.id);
        if (!doc) {
          this.posts.fetch(params.id)
            .subscribe((newDoc) => {
              this.setDoc(newDoc);
            });
        } else {
          this.setDoc(doc);
        }
      });
  }

  setDoc(doc) {
    this.title = doc.title;
    this.content = doc.content;
    this.isLoading = false;
  }
}
