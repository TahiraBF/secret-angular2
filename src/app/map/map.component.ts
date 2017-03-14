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
  zoom : number = 7;
  //Start position//
  lat: number = 51.678418;
  lng: number = 7.809007;
  //marker//
  marker: marker[] = [
    {
      name: "Company1",
      lat: 51.678418,
      lng: 7.809007,
      draggable: true
    },
  ];

  user;
  secrets;
  geocoder;
  addresses: Array<Object> = [];

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
    this.geoSecrets()

    this.addresses.forEach(function(address){
      console.log("res:", this.address)

      // this.geocoder.geocode( { 'address': address.location}, function(results, status) {
      //     //  if (status == 'OK') {
      //        console.log("res:", address.location)
            //  return results
          // } else {
            // console.log("err")
          // }
      // })
    })

  }

  geoSecrets() {
    this.secret.getSecretA()
      .subscribe((secrets) => {
        this.secrets = secrets
        console.log("showSecrets function", this.secrets)
        this.addresses.push(this.secrets)
        console.log("showSecrets function", this.addresses)


    });
  }

  // geocode(){
  //   this.secrets.forEach(function(secret){
  //     this.geocoder.geocode( { 'address': this.secret.location}, function(results, status) {
  //          if (status == 'OK') {
  //            console.log("res:", results)
  //            return results
  //         } else {
  //           console.log("err")
  //         }
  //     })
  //   })
  // }

  mapClicked($event:any) {
    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }
    this.marker.push(newMarker);
  }

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
