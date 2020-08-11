import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';
import * as faker from 'faker';
import { IUser } from '../models/user';

describe('UserService', () => {
  let service: UserService;

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
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*it('should get user', async () => {
    service.getUser(1).subscribe((data: IUser) => {
      console.log(data);
      //done();
    });
    //expect(user.name).toEqual('Vivienne');
  });*/
});
