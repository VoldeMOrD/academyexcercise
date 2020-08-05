import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://5eb57709de5849001638b6f0.mockapi.io/api/v1/users/';
  constructor(private http: HttpClient) { }

  getUserList(ini: number = 0, end: number = 0): Observable<IUser[]>{
    let paginator = '?';
    paginator += (ini !== 0) ? 'page=' + ini : '';
    paginator += (end !== 0) ? (paginator === '?') ? 'limit=' + end : '&' + 'limit=' + end : '';
    return this.http.get<IUser[]>(this.apiUrl + paginator);
  }
}
