import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { AngularMaterialModule } from '../shared/modules/angular-material/angular-material.module';

import { UserListComponent } from './components/user-list/user-list.component';
import { UserCreateComponent } from './components/user-create/user-create.component';

@NgModule({
  declarations: [ UserListComponent, UserCreateComponent ],
  imports: [ CommonModule, AppRoutingModule, AngularMaterialModule ],
  exports: [ UserListComponent ]
})
export class UsersModule { }
