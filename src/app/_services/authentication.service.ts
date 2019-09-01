import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';

import { environment } from "../../environments/environment";
import { User } from "../_models";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private activeRoute: ActivatedRoute, private http: HttpClient,private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }




  register(reg:User) {
    console.log("usernammmm");

    return this.http
      .post<any>(`${environment.apiUrl2}/register`, reg)

  }







  login(username: string, password: string) {
    console.log("usernammmm");

    return this.http
      .post<any>(`${environment.apiUrl}/users/authenticate`, {
        username,
        password
      })
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("currentUser", JSON.stringify(user));
            // this.router.navigateByUrl('/home');
            this.currentUserSubject.next(user);
            // console.log("usernammmm");
          }

          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
