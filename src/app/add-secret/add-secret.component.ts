import { Component, OnInit } from '@angular/core';
import { SessionService    } from '../services/session.service';
import { SecretsService    } from '../services/secrets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-secret',
  templateUrl: './add-secret.component.html',
  styleUrls: ['./add-secret.component.css']
})
export class AddSecretComponent implements OnInit {
  secrets: any;

  newSecret = {
    where       : " ",
    location    : " ",
    what        : " ",
    description : " ",
    tips        : " ",
    when        : " "
  }

  constructor(
    private secret : SecretsService,
    private router : Router,
  ) { }

  ngOnInit() {
    // console.log("new secret ", this.newSecret)
    // this.secret.addSecret()
    // .subscribe((secrets) => {
    //   this.secrets = secrets
    // });
  }

  addNewSecret() {
    this.secret.addSecret(this.newSecret)
    .subscribe((secrets) => {
      this.secrets = secrets;
      this.router.navigate(['/api/secrets']);
    })
  }


}
