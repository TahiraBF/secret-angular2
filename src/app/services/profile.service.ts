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

}
