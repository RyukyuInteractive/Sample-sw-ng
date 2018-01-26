import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewHomePostListComponent } from './view-home-post-list/view-home-post-list.component';
import { ViewHomePostDetailComponent } from './view-home-post-detail/view-home-post-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ViewHomeComponent,
    children: [
      {
        path: 'post/:id',
        component: ViewHomePostDetailComponent
      },
      {
        path: '',
        component: ViewHomePostListComponent
      }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
