import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: IUser[];

  constructor(private userService: UserService) {
    this.userService.getUserList(0, 10).subscribe(list => {
      // console.log(list);
      this.users = list.slice(0, 10);
    });
  }

  ngOnInit(): void {}

}
