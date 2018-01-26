import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewHomeNewsComponent } from './view-home-news/view-home-news.component';

const routes: Routes = [
  {
    path: '',
    component: ViewHomeComponent,
    children: [
      {
        path: '',
        component: ViewHomeNewsComponent
      }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
