import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../interfaces/post';

@Injectable()
export class PostsService {
  private endpoint = 'https://www.ryukyu-i.co.jp/wp-json/wp/v2/posts/';

  public docs: Post[];

  constructor(private http: HttpClient) {
  }

  public fetch() {
    return this.http
      .get(this.endpoint)
      .subscribe((docs) => {
        console.log(docs);
        this.docs = (docs as Post[])
          .map((doc) => {
            return {
              ...doc,
              content: {
                rendered: this.refactorHtml(doc.content.rendered)
              }
            } as Post;
          });
      });
  }

  refactorHtml(html) {
    return html.replace(/\/common/g, 'https://www.ryukyu-i.co.jp/common');
  }

}
