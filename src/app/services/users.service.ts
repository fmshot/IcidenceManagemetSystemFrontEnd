import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


import { Users } from "../models/User";


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  selectedUsers: Users;
  users: Users[];
  readonly baseURL = 'http://localhost/icm/public/api/auth/register';

  constructor(private http: HttpClient) { }


  getAlluser() {
    return this.http.get(this.baseURL);
  }

  postNewuser(user: Users) {
    return this.http.post(this.baseURL, user);
  }
}
