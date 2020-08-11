import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  name: string;
  lastName: string;
  email: string;
  model: IUser;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.name && this.lastName && this.email) {
      let newIndex = null;
      this.userService.getUserList().subscribe(list => {
        newIndex = list.length;
      });

      const newUser: IUser = {
        id: newIndex,
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
      console.log(data);
    });
  }
}
