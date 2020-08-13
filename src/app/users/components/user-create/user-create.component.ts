import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-user-create',
  templateUrl: '../form-template/user-form.component.html'
})
export class UserCreateComponent implements OnInit {
  type = 'Create';
  user: any = {};

  constructor( private userService: UserService ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.user.name && this.user.lastName && this.user.email) {
      this.createUser(this.user);
      this.userService.getToRoute(['']);
    }
  }

  createUser(user: IUser): void {
    this.userService.createUser(user).subscribe((data: IUser) => {
      this.userService.feedBackMessage(data.name, 'created');
    });
  }

  getUsersLenght(): number {
    let lenght = null;
    this.userService.getUserList().subscribe(list => {
      lenght = list.length;
    });
    return lenght;
  }
}
