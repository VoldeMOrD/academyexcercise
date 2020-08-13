import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-user-modify',
  templateUrl: '../form-template/user-form.component.html'
})
export class UserModifyComponent implements OnInit {
  type = 'Update';
  user: any = {};

  constructor( private userService: UserService,
               private route: ActivatedRoute ) {}

  ngOnInit(): void {
    const index = this.route.snapshot.paramMap.get('id');
    this.getUser(parseInt(index, 10));
  }

  onSubmit(): void {
    if (this.user) {
      this.updateUser(this.user);
      this.userService.getToRoute(['']);
    }
  }

  getUser(id: number): void {
    this.userService.getUser(id).subscribe((data: IUser) => {
      this.user = data;
    });
  }

  updateUser(user: IUser): void {
    this.userService.updateUser(user).subscribe((data: IUser) => {
      this.userService.feedBackMessage(data.name, 'updated');
    });
  }
}
