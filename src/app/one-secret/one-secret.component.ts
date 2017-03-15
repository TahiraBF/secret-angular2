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

  constructor(
    private secrets : SecretsService,
    // private router  : Router,
    private route   : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.showSecret(params['id']);
    })
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
