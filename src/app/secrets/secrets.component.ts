import { Component, OnInit      } from '@angular/core';
import { SecretsService         } from '../services/secrets.service';
import { SessionService         } from '../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secrets',
  templateUrl: './secrets.component.html',
  styleUrls: ['./secrets.component.css']
})
export class SecretsComponent implements OnInit {
  secrets;

  constructor(
    private secret : SecretsService,
    private route  : ActivatedRoute
  ) { }

  ngOnInit() {
    this.secret.getSecret()
    .subscribe((secrets) => {
      this.secrets = secrets
    });

  }

}
