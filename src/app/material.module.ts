import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatIconModule, MatListModule, MatMenuModule, MatProgressBarModule,
  MatSnackBarModule, MatTabsModule, MatToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class MaterialModule {
}
