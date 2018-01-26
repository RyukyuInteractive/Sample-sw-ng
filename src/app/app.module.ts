import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewHomeNewsComponent } from './view-home-news/view-home-news.component';
import { PostsService } from './services/posts.service';
import { CardPostComponent } from './card-post/card-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewHomeComponent,
    ViewHomeNewsComponent,
    CardPostComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
