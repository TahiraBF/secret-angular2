import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class IsLoggedInService implements CanActivate {
  public token: string;
  isAuth: EventEmitter<any> = new EventEmitter();

	BASE_URL: string = 'http://localhost:3000';

  constructor(
    private router: Router,
    private http: Http
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

}
