import { Component, OnInit      } from '@angular/core';
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
  secrets: any;


  constructor(
    private profile : ProfileService,
    private route  : ActivatedRoute,
    private session: SessionService,
  ) { }

  ngOnInit() {
    if (this.session.user){
      console.log('asd', this.session.user)
      this.user = this.session.user;
    }
    this.getPendingUsers()
    // this.getSecrets()
    // this.route.params
    //     .subscribe((params)=> {
    //       this.userId = params['id'];
    //       this.getEntryById(this.userId);
    //       console.log("params", this.route.params['id']);
        // })
  };

  getPendingUsers() {
    this.profile.getProfile()
      .subscribe((pendingUsers)=> {
        this.pendingUsers = pendingUsers;
        console.log("pending:", this.pendingUsers);
      })
  }

  // getSecrets() {
  //   this.profile.getProfile()
  //     .subscribe((secrets)=> {
  //       this.secrets = secrets;
  //       console.log("secrets:", this.secrets);
  //
  //     })
  // }






  // getEntryById(id){
  //   this.profile.getById(id)
  //   .subscribe((user)=> {
  //     this.userTwo = user;
  //     console.log("user:", user);
  //
  //   })
  // }



}
