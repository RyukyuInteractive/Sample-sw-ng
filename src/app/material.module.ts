import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatProgressBarModule,
  MatSidenavModule, MatToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressBarModule
  ]
})
export class MaterialModule {
}
