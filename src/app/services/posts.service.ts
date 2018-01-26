import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Post } from '../interfaces/post';

interface FetchAllArg {
  categories: string;
}

@Injectable()
export class PostsService {
  private endpoint = 'https://www.ryukyu-i.co.jp/wp-json/wp/v2/posts/';

  public docs: Post[];

  public docsMap = new Map();

  constructor(private http: HttpClient) {
  }

  public fetchAll(args: FetchAllArg) {
    const params = new HttpParams().set('categories', args.categories);
    return this.http
      .get(this.endpoint, {params: params})
      .subscribe((docs: Post[]) => {
        this.docs = docs
          .map((doc) => {
            return {
              ...doc,
              content: {
                rendered: this.refactorHtml(doc.content.rendered)
              }
            } as Post;
          });
        this.docs.forEach((doc) => {
          this.docsMap.set(doc.id.toString(), doc);
        });
      });
  }

  public fetch(id) {
    return this.http
      .get(this.endpoint + id)
      .map((doc: Post) => {
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
      .replace(/<p/g, '<p class="mat-body-2"');
  }

}
