import { Component, OnInit      } from '@angular/core';
import { IsAdminService         } from '../services/is-admin.service';
import { ProfileService         } from '../services/profile.service';
import { SessionService         } from '../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader           } from "ng2-file-upload";



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId;
  user: any;
  userTwo: any;
  pendingUsers: any;
  feedback : string;


  newUser = {
    username      : " ",
    password      : " ",
    name          : " ",
    travellerType : " ",
    description   : " "
  }

  constructor(
    private profile : ProfileService,
    private route  : ActivatedRoute,
    private session: SessionService
  ) { }

  ngOnInit() {
    if (this.session.user){
      this.user = this.session.user;
    }
    this.getPendingUsers()
  };


  getPendingUsers() {
    this.profile.getProfile()
      .subscribe((pendingUsers)=> {
        this.pendingUsers = pendingUsers;
      })
  }




}
