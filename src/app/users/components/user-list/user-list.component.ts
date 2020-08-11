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
  @Input() users: MatTableDataSource<IUser>;
  @Input() displayedColumns: string[] = ['id', 'name', 'email', 'active', 'button'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private userService: UserService) {
    this.userService.getUserList().subscribe(list => {
      this.users = new MatTableDataSource<IUser>(list);
      this.users.paginator = this.paginator;
    });
  }

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

