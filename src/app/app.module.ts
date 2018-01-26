import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewHomePostListComponent } from './view-home-post-list/view-home-post-list.component';
import { PostsService } from './services/posts.service';
import { CardPostComponent } from './card-post/card-post.component';
import { ViewHomePostDetailComponent } from './view-home-post-detail/view-home-post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewHomeComponent,
    ViewHomePostListComponent,
    CardPostComponent,
    ViewHomePostDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
