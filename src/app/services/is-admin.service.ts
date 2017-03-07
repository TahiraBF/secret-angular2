import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { SessionService   } from './session.service';


@Injectable()
export class IsAdminService implements CanActivate {
  public token: string;
  isAuth: EventEmitter<any> = new EventEmitter();
  BASE_URL: string = 'http://localhost:3000/api';

  constructor(
    private http: Http,
    private router: Router,
    private SessionService: SessionService
  ) {
        // set token if saved in local storage
        this.token = localStorage.getItem('token');
        if (this.token != null) {
          this.isAuth.emit(true);
        } else {
          this.isAuth.emit(false);
        }
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('token')) {
      // logged in so return true\
      return true;
    }
    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    this.isAuth.emit(true);
    return false;
  }

  getRole() {

  let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
  let options = new RequestOptions({ headers: headers });
  return this.http.get(`${this.BASE_URL}/admin`, options)
    .map((res) => res.json());
}


}
