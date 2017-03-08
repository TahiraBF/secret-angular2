import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { SessionService   } from './session.service';


@Injectable()
export class ProfileService {
  BASE_URL: string = 'http://localhost:3000'

  constructor(
    private http: Http,
    private SessionService: SessionService
  ) { }

  getProfile() {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.BASE_URL}/api/profile`, options)
      .map((res) => res.json());
  }

  getById(id) {
  let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
  let options = new RequestOptions({ headers: headers });
  return this.http.get(`${this.BASE_URL}/api/profile/${id}`, options)
    .map((res) => res.json());
}

  approveUser(id, newUser: any) {
  console.log(newUser);
  let body = JSON.stringify(newUser);
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http.post(`${this.BASE_URL}/api/profile/${id}`, newUser, options).subscribe((res => console.log('succes')));
  }

  remove(id) {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(`${this.BASE_URL}/api/profile/${id}`, options)
      .map((res) => res.json());
  }

  edit(user) {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(`${this.BASE_URL}/api/profile/`, user, options)
      .map((res) => res.json());
  }

}
