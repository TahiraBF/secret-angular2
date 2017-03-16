import { Component, OnInit } from '@angular/core';
import { SecretsService         } from '../services/secrets.service';
import { SessionService         } from '../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-one-secret',
  templateUrl: './one-secret.component.html',
  styleUrls: ['./one-secret.component.css']
})
export class OneSecretComponent implements OnInit {
  secret: any;
  shouldShow: Boolean = false;
  user;

  constructor(
    private secrets : SecretsService,
    private session  : SessionService,
    private route   : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.showSecret(params['id']);
    })
    if (this.session.user){
      this.user = this.session.user._id;
      console.log("user:", this.user)
      console.log("sessionuser:", this.session.user)

    }

  }

  showSecret(id) {
    this.secrets.viewOneSecret(id)
    .subscribe((secret) => {
      this.secret = secret;
    }
  )};

  updateSecret() {
    this.secrets.editSecret(this.secret)
    .subscribe((res) => {
      console.log("secret to update is ", this.secret);
    })
  }

  toggle() {
    this.shouldShow = !this.shouldShow;
  }



}
