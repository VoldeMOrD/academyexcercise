import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../users/services/user.service';
import { IUser } from 'src/app/users/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['']);
    }
  }

  onSubmit(): void {
    if (!this.validateEmail(this.email)){
      this.userService.feedBackError('login incorrecto!');
    }else{
      this.userService.doLogin(this.email).subscribe((data: IUser[]) => {
        if (data.length > 0) {
          localStorage.setItem('currentUser', data[0].id.toString());
          this.refresh();
        } else {
          this.userService.feedBackError('login incorrecto!');
        }
      });
    }
  }

  validateEmail( mail: string ): boolean {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( mail)
    ) {
      return true;
    }
    return false;
  }

  refresh(): void {
    window.location.reload();
  }
}
