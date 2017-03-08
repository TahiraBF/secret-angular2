import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService         } from '../services/session.service';
import { ProfileService         } from '../services/profile.service';

@Component({
  selector: 'app-approve-user',
  templateUrl: './approve-user.component.html',
  styleUrls: ['./approve-user.component.css']
})
export class ApproveUserComponent implements OnInit {

  user: any;


  constructor(
    private profile : ProfileService,
    private route  : ActivatedRoute,
    private session: SessionService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getEntryById(params['id']);
      // console.log("user2:", this.user);
    });

  }

  getEntryById(id){
    this.profile.getById(id)
      .subscribe((user)=> {
        this.user = user;
        console.log("user:", this.user);
      })
  }

  approvedUser(){
    this.profile.approveUser(this.user);
      }

}
