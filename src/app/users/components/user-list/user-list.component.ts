import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IUser } from '../../models/user';
import { UserService } from '../../services/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Input() users: any;
  @Input() displayedColumns: string[] = ['id', 'name', 'email', 'active', 'button'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private userService: UserService) {
    this.userService.getUserList(0, 10).subscribe(list => {
      // console.log(list);
      this.users = new MatTableDataSource<IUser>(list);
    });
  }

  ngOnInit(): void {
    this.users.paginator = this.paginator;
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

