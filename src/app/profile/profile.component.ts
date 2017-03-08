import { Component, OnInit } from '@angular/core';
import { IsAdminService   } from '../services/is-admin.service';
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
  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/api/profile/`,
    authToken: `JWT ${this.session.token}`
  });

  userId;
  user: any;
  userTwo: any;
  pendingUsers: any;
  secrets: any;
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

    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
      console.log("uploader item");
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
      console.log("uploader error");
    };
  };


  getPendingUsers() {
    this.profile.getProfile()
      .subscribe((pendingUsers)=> {
        this.pendingUsers = pendingUsers;
      })
  }

  update() {
    this.profile.edit(this.user).subscribe((res) => {
      console.log("hola", res);
    });
  }

}
