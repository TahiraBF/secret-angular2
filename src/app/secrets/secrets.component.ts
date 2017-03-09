import { Component, OnInit, NgZone } from '@angular/core';
import { SecretsService         } from '../services/secrets.service';
import { SessionService         } from '../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secrets',
  templateUrl: './secrets.component.html',
  styleUrls: ['./secrets.component.css']
})
export class SecretsComponent implements OnInit {
  secrets: any;
  user: any

  constructor(
    private secret : SecretsService,
    private route  : ActivatedRoute,
    private session: SessionService,
    private ngZone: NgZone

  ) { }

  ngOnInit() {
    if (this.session.user){
      this.user = this.session.user;
    }
    console.log("ngOnInit");
    this.showSecrets()
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

showSecrets() {
  this.secret.getSecret()
    .subscribe((secrets) => {
      console.log("showSecrets function", secrets)
      this.ngZone.run(()=>{
          this.secrets = secrets
      })

    });

}


}
