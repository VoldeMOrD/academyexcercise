import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { AngularMaterialModule } from '../shared/modules/angular-material/angular-material.module';

import { UserListComponent } from './components/user-list/user-list.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserListComponent, UserCreateComponent],
  imports: [CommonModule, AppRoutingModule, AngularMaterialModule, FormsModule],
  exports: [UserListComponent],
})
export class UsersModule {}
