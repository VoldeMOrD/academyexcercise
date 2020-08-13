import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/user';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-create',
  templateUrl: '../user-form/user-form.component.html'
})
export class UserCreateComponent implements OnInit {
  title = 'Create a new User';
  name: string;
  lastName: string;
  email: string;

  constructor( private userService: UserService,
               private router: Router ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.name && this.lastName && this.email) {
      const newUser: IUser = {
        id: this.getUsersLenght(),
        createdAt: new Date(),
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        active: true,
        accountNumber: 0,
        amount: 0,
        transactionType: '',
        country: '',
        telephone: ''
      };

      this.createUser(newUser);
      this.router.navigate(['']);
    }
  }

  createUser(user: IUser): void {
    this.userService.createUser(user).subscribe((data: IUser) => {
      this.userService.feedBackMessage(data.name, 'created');
      this.refresh();
    });
  }

  getUsersLenght(): number {
    let lenght = null;
    this.userService.getUserList().subscribe(list => {
      lenght = list.length;
    });
    return lenght;
  }

  refresh(): void {
    const userList = new UserListComponent(this.userService);
    userList.refresh();
  }
}
