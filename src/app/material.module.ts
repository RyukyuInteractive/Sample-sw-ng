import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatIconModule,
  MatListModule, MatMenuModule, MatProgressBarModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class MaterialModule {
}
