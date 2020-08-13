import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './users/components/user-list/user-list.component';
import { UserCreateComponent } from './users/components/user-create/user-create.component';
import { LoginComponent } from './shared/components/login/login.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { path: '', component: UserListComponent, canActivate: [AuthGuardGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'create', component: UserCreateComponent, canActivate: [AuthGuardGuard] },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
