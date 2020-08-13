import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';
import * as faker from 'faker';
import { IUser } from '../models/user';
import { UserListComponent } from '../components/user-list/user-list.component';
import { Observable, of } from 'rxjs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserService', () => {
  let service: UserService;
  let component: UserListComponent;

  const mockResponse = {
    id: '9999',
    createdAt: '2020-05-07T18:24:56.117Z',
    name: 'This is a Test',
    lastName: 'This is a Test',
    accountNumber: 19,
    amount: '313.00',
    transactionType: 'Games',
    email: 'Moriah_Adams@hotmail.com',
    active: true,
    country: 'Mauritania',
    telephone: '1-928-249-4618',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
      ],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user', async () => {
    /*service.getUser(1).subscribe(data=>{
      console.log(data);
    });*/
    //expect(user.name).toEqual('Vivienne');
  });
});
