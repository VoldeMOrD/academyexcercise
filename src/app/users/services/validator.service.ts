import { Injectable } from '@angular/core';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  user: IUser;

  constructor() { }

  validateFields(user: IUser): boolean {
    this.user = user;
    return this.validateEachField();
  }

  private validateEachField(): boolean {
    const requiredFields: boolean[] = [];

    requiredFields.push(this.requiredField(this.user.name));
    requiredFields.push(this.requiredField(this.user.lastName));
    requiredFields.push(this.requiredField(this.user.accountNumber));
    requiredFields.push(this.requiredField(this.user.amount));
    requiredFields.push(this.requiredField(this.user.transactionType));
    requiredFields.push(this.requiredField(this.user.email));
    requiredFields.push(this.requiredField(this.user.active));
    requiredFields.push(this.requiredField(this.user.country));
    requiredFields.push(this.requiredField(this.user.telephone));

    return !(requiredFields.indexOf(false) >= 0);
  }

  private requiredField(field: string|number|boolean): boolean {
    return (field) ? true : false;
  }

  emailHasError(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(String(email).toLowerCase());
  }
}
