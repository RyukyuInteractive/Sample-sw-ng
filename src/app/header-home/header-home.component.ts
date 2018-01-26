import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit, OnDestroy {
  private subscription: ISubscription;
  public hide = false;
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

  constructor(public posts: PostsService) {
  }

  public onChangeRouteClick() {
    window.scrollTo(0, 0);
  }

  public ngOnInit() {
    this.subscription = this.posts.isFetching
      .subscribe((res: boolean) => {
        this.hide = res;
      });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
