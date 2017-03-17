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
  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/api/profile`,
    // url: `https://the-secret-place.herokuapp.com/api/profile`,
    authToken: `JWT ${this.session.token}`
  });


  userId;
  user: any;
  pendingUsers: any;
  feedback : string;
  shouldShow: Boolean = true;
  showAdmin: Boolean = true;



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
    private session: SessionService,
    private router  : Router
  ) { }

  ngOnInit() {
    if (this.session.user){
      this.user = this.session.user;
    }
    console.log("ngOnInit");
    this.getPendingUsers();

    this.uploader.onSuccessItem = (item, response) => {
        this.feedback = JSON.parse(response).message;
        console.log("uploaded item");
        this.user = JSON.parse(response).user;
        localStorage.removeItem('user')
        localStorage.setItem('user', JSON.stringify(this.user))
        this.router.navigate(['/api/profile'])
        console.log("local user updated");
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
      console.log("uploader error");
    };

    this.shouldShow = false;
    this.showAdmin = false;


  };


  getPendingUsers() {
    this.profile.getProfile()
      .subscribe((pendingUsers)=> {
        this.pendingUsers = pendingUsers;
      })
  }

  update() {
    this.profile.edit(this.user).subscribe((res) => {
      // console.log("hola", res);
    });
    this.uploader.onBuildItemForm = (item, form) => {
    };
      this.uploader.uploadAll();
  }

  toggle() {
    this.shouldShow = !this.shouldShow;
  }

  toggleAdmin() {
    this.showAdmin = !this.showAdmin;
  }


}
