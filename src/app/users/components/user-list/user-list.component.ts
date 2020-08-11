import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {

  }

  getUser(id: number): void {
    this.userService.getUser(id).subscribe((data: IUser) => {
      console.log(data);
    });
  }

  createUser(user: IUser): void {
    this.userService.createUser(user).subscribe((data: IUser) => {
      console.log(data);
    });
  }

  updateUser(user: IUser): void {
    this.userService.updateUser(user).subscribe((data: IUser) => {
      console.log(data);
    });
  }

  deleteUser(user: IUser): void {
    this.userService.deleteUser(user).subscribe((data: IUser) => {
      console.log(data);
    });
  }
}
