import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { SessionService   } from './session.service';

@Injectable()
export class SecretsService {
  BASE_URL: string = 'http://localhost:3000'

  constructor(
    private http: Http,
    private SessionService: SessionService,
  ) { }

  getSecret() {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.BASE_URL}/api/secrets`, options)
      .map((res) => res.json());
  }

  getSecretSearch() {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.BASE_URL}/api/secrets/search`, options)
      .map((res) => res.json());
  }

  featuredSecret() {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.BASE_URL}/api/secrets/featured`, options)
      .map((res) => res.json());
  }

  viewOneSecret(id) {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.BASE_URL}/api/secrets/${id}`, options)
      .map((res) => res.json());
  }

}
