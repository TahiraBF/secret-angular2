import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { AgmCoreModule, SebmGoogleMap, SebmGoogleMapMarker } from 'angular2-google-maps/core';

@Component({
  selector: 'app-map',
  styleUrls: ['./map.component.css'],
  templateUrl: './map.component.html',

})
export class MapComponent {

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
    {
      name: "Company2",
      lat: 51.507879,
      lng: -0.087732,
      draggable: true
    }
  ];

  constructor() {

  }

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
