import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../users/services/user.service';
import { IUser } from 'src/app/users/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title = 'User manager';
  user: IUser;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: radix
    this.userService.getUser(parseInt(localStorage.getItem('currentUser'))).subscribe(
      (data: IUser) => {
        this.user = data;
      }
    );
  }

}
