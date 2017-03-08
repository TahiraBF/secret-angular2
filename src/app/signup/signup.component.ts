import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
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
    private router: Router
  ) { }

  ngOnInit() {
  }

  signup() {
  	this.session.signup(this.newUser)
      .subscribe(result => {
          if (result === true) {
              console.log('result ok', result);
              this.router.navigate(['']);
          } else {
          		console.log('result ko', result);
          }
      });
  }
}
