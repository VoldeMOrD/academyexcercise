import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { IUser } from '../../models/user';
import { UserService } from '../../services/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, AfterViewInit {
  @Input() users: MatTableDataSource<IUser>;
  @Input() displayedColumns: string[] = ['id', 'name', 'email', 'active', 'button'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor( private userService: UserService ) {}

  ngOnInit(): void {
    this.refresh();
  }

  ngAfterViewInit(): void {
    this.refresh();
  }

  updateUser(user: IUser): void {
    this.userService.getToRoute(['update', user.id]);
  }

  deleteUser(user: IUser): void {
    this.userService.deleteUser(user).subscribe((data: IUser) => {
      this.userService.feedBackMessage(data.name, 'deleted');
      this.refresh();
    });
  }

  refresh(): void {
    this.userService.getUserList().subscribe(list => {
      this.users = new MatTableDataSource<IUser>(list);
      this.users.paginator = this.paginator;
    });
  }
}

