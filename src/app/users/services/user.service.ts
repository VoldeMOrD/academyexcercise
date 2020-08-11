import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://5eb57709de5849001638b6f0.mockapi.io/api/v1/users/';
  constructor(private http: HttpClient) { }

  getUserList(ini: number = 0, end: number = 0): Observable<IUser[]>{
    let paginator = '?';
    paginator += ini !== 0 ? 'page=' + ini : 'page=1';
    paginator += (end !== 0) ? (paginator === '?') ? 'limit=' + end : '&' + 'limit=' + end : '';
    console.log(this.apiUrl + paginator);
    return this.http.get<IUser[]>(this.apiUrl + paginator);
  }

  getUser(id: number): Observable<IUser>{
    return this.http.get<IUser>(this.apiUrl + id);
  }

  createUser(user: IUser): Observable<IUser>{
    return this.http.post<IUser>(this.apiUrl, user);
  }

  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(this.apiUrl + user.id, user);
  }

  deleteUser(user: IUser): Observable<IUser> {
    return this.http.delete<IUser>(this.apiUrl + user.id);
  }

  handleError(arg0: string, hero: any): any {
    throw new Error('Method not implemented.');
  }
}
