import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { AngularMaterialModule } from '../shared/modules/angular-material/angular-material.module';

import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [ UserListComponent ],
  imports: [ CommonModule, AppRoutingModule, AngularMaterialModule ],
  exports: [ UserListComponent ]
})
export class UsersModule { }
