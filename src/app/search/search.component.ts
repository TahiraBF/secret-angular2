import { Component, OnInit, NgZone } from '@angular/core';
import { SecretsService         } from '../services/secrets.service';
import { SessionService         } from '../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  secrets: any;
  user: any;
  pattern1: String;

  constructor(
    private session: SessionService,
    private secret : SecretsService,

  ) { }

  ngOnInit() {
    if (this.session.user){
      this.user = this.session.user;
    }
    console.log("ngOnInit");
    this.showSecrets()

  }

  showSecrets() {
    this.secret.getSecretSearch()
      .subscribe((secrets) => {
        console.log("showSecrets: ", secrets)
        this.secrets = secrets

      });

  }

}