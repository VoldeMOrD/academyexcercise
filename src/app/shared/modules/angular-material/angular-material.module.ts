import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [ CommonModule, MatToolbarModule, MatButtonModule,
             MatIconModule, MatTableModule, MatPaginatorModule,
             MatFormFieldModule, MatInputModule, MatSnackBarModule
           ],
  exports: [ MatToolbarModule, MatButtonModule, MatIconModule,
             MatTableModule, MatPaginatorModule, MatFormFieldModule,
             MatInputModule, MatSnackBarModule
           ]
})
export class AngularMaterialModule { }
