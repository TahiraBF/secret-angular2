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
  lat: number;
  lng: number;
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

    this.geolocate()

    this.geocoder = new google.maps.Geocoder();
    let that = this
    this.secret.getSecretA()
      .subscribe((secrets) => {
        this.secrets = secrets
        for (let secret of secrets){
          this.geocoder.geocode( { 'address': secret.location}, function(results, status) {
            if (status == 'OK') {
                   var newMarker = {
                     name: results[0].address_components[0].short_name,
                     lat: results[0].geometry.viewport.f.f,
                     lng: results[0].geometry.viewport.b.b,
                     draggable: false
                   }
                   that.marker.push(newMarker)
                   console.log("newMarker:", that.marker)
                } else {
                  console.log("error showing markers")
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

  geolocate() {
    if(navigator.geolocation){
        let that = this;
        navigator.geolocation.getCurrentPosition(function(position) {

            var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                that.lat = geolocate.lat();
                that.lng = geolocate.lng();
                console.log("Current latlng:", that.lat, that.lng)
        })
    } else {
        this.lat = 0;
        this.lng = 0;
        console.log("else nav")
    }

}


  styles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]

}


  //Marker Type//
  interface marker {
    name? : String;
    lat: number;
    lng: number;
    draggable: boolean;
  }
