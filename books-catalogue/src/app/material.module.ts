import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule 
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule 
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule 
  ]
})
export class MaterialModule {}