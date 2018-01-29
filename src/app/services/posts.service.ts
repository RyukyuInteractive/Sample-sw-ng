import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';

import { Post } from '../interfaces/post';

interface FetchAllArg {
  categories: string;
}

@Injectable()
export class PostsService {
  private endpoint = 'https://www.ryukyu-i.co.jp/wp-json/wp/v2/posts';

  public isFetching = new Subject();

  public docs: Post[];

  public docsMap = new Map();

  constructor(private http: HttpClient) {
    this.isFetching.next(false);
  }

  public fetchAll(args: FetchAllArg) {
    this.isFetching.next(true);
    let query = '?';
    if (args.categories) {
      query += 'categories=' + args.categories;
    }
    return this.http
      .get(this.endpoint + query)
      .subscribe((docs: Post[]) => {
        this.docs = docs
          .map((doc) => {
            return {
              ...doc,
              content: {
                rendered: this.refactorHtml(doc.content.rendered)
              },
              excerpt: {
                rendered: this.refactorHtml(doc.excerpt.rendered)
              }
            } as Post;
          });
        this.docs.forEach((doc) => {
          this.docsMap.set(doc.id.toString(), doc);
        });
        this.isFetching.next(false);
      });
  }

  public fetch(id) {
    return this.http
      .get(this.endpoint + id)
      .map((doc: Post) => {
        console.log(doc);
        const newDoc = {
          ...doc,
          content: {
            rendered: this.refactorHtml(doc.content.rendered)
          }
        } as Post;
        this.docsMap.set(doc.id.toString(), newDoc);
        return newDoc;
      });
  }

  private refactorHtml(html) {
    return html
      .replace(/\/common/g, 'https://www.ryukyu-i.co.jp/common')
      .replace(/<p/g, '<p class="mat-body-2"')
      .replace(/\[&hellip;]/g, '...');
  }

}
