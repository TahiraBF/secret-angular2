import { Component, OnInit } from '@angular/core';
import { SecretsService         } from '../services/secrets.service';
import { SessionService         } from '../services/session.service';

@Component({
  selector: 'app-featured-secret',
  templateUrl: './featured-secret.component.html',
  styleUrls: ['./featured-secret.component.css']
})
export class FeaturedSecretComponent implements OnInit {

  secrets: any;
  user: any;

  constructor(
    private secret : SecretsService,
    private session: SessionService
  ) {
  }


  ngOnInit() {
    if (this.session.user){
      this.user = this.session.user;
    }
    console.log("ngOnInit");
    this.getRandomSecret()
  }

  getRandomSecret() {
    this.secret.featuredSecret()
      .subscribe((secrets) => {
        console.log("showSecrets function", secrets)
        this.secrets = secrets
      });
}

}
