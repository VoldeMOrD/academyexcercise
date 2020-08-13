import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../models/user';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-user-modify',
  templateUrl: '../form-template/user-form.component.html'
})
export class UserModifyComponent implements OnInit {
  type = 'Update';
  user: IUser = this.userService.getNullUser();
  emailError: boolean;

  constructor( private userService: UserService,
               private validatorService: ValidatorService,
               private route: ActivatedRoute ) {}

  ngOnInit(): void {
    const index = this.route.snapshot.paramMap.get('id');
    this.getUser(parseInt(index, 10));
  }

  onSubmit(): void {
    if (this.validatorService.validateFields(this.user)) {
      this.emailError = this.validatorService.emailHasError(this.user.email);
      if (!this.emailError) {
        this.updateUser(this.user);
        this.userService.getToRoute(['']);
      } else {
        this.userService.feedBackError('Not a valid email');
      }
    } else {
      this.userService.feedBackError('Should fill every field');
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
