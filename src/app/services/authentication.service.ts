import { Users } from './../interface/user';
import { AppareilsService } from './appareils.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUSer';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private appS: AppareilsService) { }
  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }
  getAuthenticatedToken() {
    return sessionStorage.getItem(TOKEN);
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }
  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

  executeJWTAuthenticationService(username, password) {
    return this.http.post<any>(
    this.appS.RootUrl + `authenticate`, {
    username,
    password}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );
  }
}
