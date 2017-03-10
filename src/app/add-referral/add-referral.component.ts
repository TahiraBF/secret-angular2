import { Component, OnInit } from '@angular/core';
import { SessionService    } from '../services/session.service';
import { ProfileService         } from '../services/profile.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-referral',
  templateUrl: './add-referral.component.html',
  styleUrls: ['./add-referral.component.css']
})
export class AddReferralComponent implements OnInit {

  addReferredUser = {
    refEmail: " ",
  }

  constructor(
    private session: SessionService,
    private profile: ProfileService,
    private router : Router
  ) { }

  ngOnInit() {
  }


  getReferral() {
    console.log(this.addReferredUser)
    this.profile.addReferral(this.addReferredUser)
    .subscribe(res => {
      this.router.navigate(['/api/profile'])
    });
  }
}
