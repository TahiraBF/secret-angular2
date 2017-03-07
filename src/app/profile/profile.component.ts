import { Component, OnInit } from '@angular/core';
import { ProfileService   } from '../services/profile.service';
import { SessionService   } from '../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId;
  user: any;
  userTwo: any;
  constructor(
    private profile : ProfileService,
    private route  : ActivatedRoute,
    private session: SessionService,
  ) { }

  ngOnInit() {

    if (this.session.user){
      console.log('asd', this.session.user)
      this.userTwo = this.session.user;
    }
    this.route.params
        .subscribe((params)=> {
          this.userId = params['id'];
          this.getEntryById(this.userId);
          console.log("params", this.route.params);

        })
  }

  getEntryById(id){
    this.profile.getById(id)
    .subscribe((user)=> {
      this.user = user;
      console.log("user:", user);

    })
  }



}
