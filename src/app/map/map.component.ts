import { Component, OnInit, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { SessionService    } from '../services/session.service';
import { SecretsService    } from '../services/secrets.service';
import { AgmCoreModule, SebmGoogleMap, SebmGoogleMapMarker } from 'angular2-google-maps/core';
import { MapsAPILoader } from 'angular2-google-maps/core';
declare var google: any;


@Component({
  selector: 'app-map',
  styleUrls: ['./map.component.css'],
  templateUrl: './map.component.html',

})
export class MapComponent implements OnInit {

  //zoom//
  zoom : number = 2;
  //Start position//
  lat: number = 51.678418;
  lng: number = 7.809007;
  //marker//
  marker: marker[] = [];

  user;
  secrets;
  geocoder;
  // geocoder = new google.maps.Geocoder();

  constructor(
    private secret : SecretsService,
    // private router : Router,
    private session: SessionService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {

  }

  ngOnInit() {
    if (this.session.user){
      this.user = this.session.user;
    }

    this.geocoder = new google.maps.Geocoder();
    console.log("ngOnInit:", this.geocoder);
    let that = this
    this.secret.getSecretA()
      .subscribe((secrets) => {
        this.secrets = secrets
        console.log("showSecrets function", this.secrets)
        for (let secret of secrets){
          console.log("secret", secret.location)
          this.geocoder.geocode( { 'address': secret.location}, function(results, status) {
            if (status == 'OK') {
                   console.log("res:", results)
                   var newMarker = {
                     name: results[0].address_components[0].short_name,
                     lat: results[0].geometry.viewport.f.f,
                     lng: results[0].geometry.viewport.b.b,
                     draggable: false
                   }
                   that.marker.push(newMarker)
                   console.log("this.marker2", that.marker)
                } else {
                  console.log("err")
                }
            })
        }

    });

  }

  // mapClicked($event:any) {
  //   var newMarker = {
  //     name: 'Untitled',
  //     lat: $event.coords.lat,
  //     lng: $event.coords.lng,
  //     draggable: false
  //   }
  //   this.marker.push(newMarker);
  // }

  markerDragEnd(marker:any, $event:any){

    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;
  }

  clickedMarker(marker: marker, index: number) {
      console.log("Clicked marker: " +marker.name + "at index" +index)
  }

}


  //Marker Type//
  interface marker {
    name? : String;
    lat: number;
    lng: number;
    draggable: boolean;
  }
