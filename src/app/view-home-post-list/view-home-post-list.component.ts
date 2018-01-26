import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-view-home-posts',
  templateUrl: './view-home-post-list.component.html',
  styleUrls: ['./view-home-post-list.component.css']
})
export class ViewHomePostListComponent implements OnInit, OnDestroy {

  private subscription: ISubscription;

  constructor(
    public posts: PostsService,
    private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.subscription = this.route.data.subscribe((data) => {
      this.posts.fetchAll({
        categories: data.categories
      });
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
