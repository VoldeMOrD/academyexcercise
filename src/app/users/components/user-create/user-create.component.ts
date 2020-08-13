import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/user';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-user-create',
  templateUrl: '../form-template/user-form.component.html'
})
export class UserCreateComponent implements OnInit {
  type = 'Create';
  user: IUser = this.userService.getNullUser();
  emailError: boolean;

  constructor( private userService: UserService,
               private validatorService: ValidatorService ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.validatorService.validateFields(this.user)) {
      this.emailError = this.validatorService.emailHasError(this.user.email);
      if (!this.emailError) {
        this.user.createdAt = new Date();
        if (!this.user.active) { this.user.active = false; }
        this.createUser(this.user);
        this.userService.getToRoute(['']);
      } else {
        this.userService.feedBackError('Not a valid email');
      }
    } else {
      this.userService.feedBackError('Should fill every field');
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
