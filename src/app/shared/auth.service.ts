import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

const AUTH_API = 'https://dry-bastion-69323.herokuapp.com/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);

  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);

  }

  // login(user: User): Observable<any> {
  //   return this.http.post(AUTH_API + 'signin', user, httpOptions);
  // }

  // register(user: User): Observable<any> {
  //   return this.http.post(AUTH_API + 'signup', user, httpOptions);
  // }

}

