import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { SessionService    } from '../services/session.service';
import { SecretsService    } from '../services/secrets.service';
import { Router            } from '@angular/router';
import { FileUploader      } from "ng2-file-upload";
import { FormControl } from "@angular/forms";
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { MapsAPILoader } from 'angular2-google-maps/core';
declare var google: any;

@Component({
  selector: 'app-add-secret',
  templateUrl: './add-secret.component.html',
  styleUrls: ['./add-secret.component.css']
})
export class AddSecretComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
   url: `http://localhost:3000/api/secrets/add`,
  //  url: `https://the-secret-place.herokuapp.com/api/secrets/add`,
   authToken: `JWT ${this.session.token}`
    });

  secrets: any;
  user: any;

  options: DatePickerOptions;
  date: DateModel;

  newSecret = {
    title       : " ",
    location    : " ",
    what        : " ",
    description : " ",
    tips        : " "
    };

  // latitude: number;
  // longitude: number;
  searchControl: FormControl;
  // zoom: number;


  feedback: string;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private secret : SecretsService,
    private router : Router,
    private session: SessionService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone

  ) {
    this.options = new DatePickerOptions();
 }

  ngOnInit() {
    if (this.session.user){
      this.user = this.session.user._id;
    }

    this.uploader.onSuccessItem = (item, res) => {
      this.feedback = JSON.parse(res).message;
      this.router.navigate(['/api/secrets']);
    }

    this.uploader.onErrorItem = (item, res, status, headers) => {
      this.feedback = JSON.parse(res).message;
    }

    // this.searchControl = new FormControl();
    // console.log("search: ", this.searchControl)

    let input = document.getElementById('InputLocation');
    let autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener("place_changed", ()=>{
      console.log('input:', input)
      return this.newSecret.location = autocomplete.getPlace().formatted_address;
    })


    //
    // this.mapsAPILoader.load().then(() => {
    //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
    //     types: ["address"]
    //   });
    //   autocomplete.addListener("place_changed", () => {
    //     this.ngZone.run(() => {
    //       //get the place result
    //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();
    //
    //       //verify result
    //       if (place.geometry === undefined || place.geometry === null) {
    //         return;
    //       }
    //
    //       //set latitude, longitude and zoom
    //       this.latitude = place.geometry.location.lat();
    //       this.longitude = place.geometry.location.lng();
    //       // this.zoom = 12;
    //     });
    //   });
    // });
  }

  addNewSecret() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('title', this.newSecret.title);
      form.append('location', this.newSecret.location);
      form.append('what', this.newSecret.what);
      form.append('description', this.newSecret.description);
      form.append('tips', this.newSecret.tips);
      form.append('when', this.date.formatted)

    };
    this.uploader.uploadAll();
    console.log("date:", this.date.formatted)
  }

  calendar() {
  }


}
