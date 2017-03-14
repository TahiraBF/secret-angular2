import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { SessionService   } from './session.service';
import { SebmGoogleMap } from 'angular2-google-maps/core';
declare let google:any;

@Injectable()
export class GeocodeService {
  BASE_URL: string = 'http://localhost:3000'

  geocoder: google.maps.Geocoder;

  constructor(
    private http: Http,
    private session: SessionService,
  ) {
    // this.session.user = JSON.parse(localStorage.getItem('user'));
    this.geocoder = new google.maps.Geocoder();
  }

  // codeAddress(location) {
  //   this.geocoder.geocode( {'location': location}, function(results, status) {
  //     if (status) {
  //       return results;
  //     } else {
  //       console.log('Geocode was not successful for the following reason: ' + status);
  //     }
  //   })
  // }

}
