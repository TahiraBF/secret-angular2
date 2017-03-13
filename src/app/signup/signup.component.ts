import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	newUser = {
    username: '',
    password: '',
    name: '',
    travellerType: '',
    description: '',
    foundUsHow: '',
    isDisclaimer: '',
    referredBy: ''
  };

  user: any;
  error: string;


  constructor(
  	private session: SessionService,
    private router: Router,
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  signup() {
  	this.session.signup(this.newUser)
      .subscribe((result) => {
          if (result === true) {
              console.log('result ok', result);
              localStorage.removeItem('token')
              localStorage.removeItem('user')
              this.router.navigate(['']);
          } else {
          		console.log('result ko', result);

          }
      },
      (error) => {
        if (error.status === 403) {
        this.flashMessages.show('User Name Exists', {cssClass: 'alert-danger', timeout: 3000})
        }
        else {
          this.flashMessages.show('Please fill in all the fields', {cssClass: 'alert-danger', timeout: 3000})
        }

      }
      )
  }
}
