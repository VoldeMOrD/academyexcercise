import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { AngularMaterialModule } from '../shared/modules/angular-material/angular-material.module';

import { UserListComponent } from './components/user-list/user-list.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { FormsModule } from '@angular/forms';
import { UserModifyComponent } from './components/user-modify/user-modify.component';

@NgModule({
  declarations: [UserListComponent, UserCreateComponent, UserModifyComponent],
  imports: [CommonModule, AppRoutingModule, AngularMaterialModule, FormsModule ],
  exports: [UserListComponent],
})
export class UsersModule {}
