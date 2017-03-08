import { Component, OnInit } from '@angular/core';
import { IsAdminService   } from '../services/is-admin.service';
import { ProfileService         } from '../services/profile.service';
import { SessionService         } from '../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader           } from "ng2-file-upload";


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/api/profile/`,
    authToken: `JWT ${this.session.token}`
  });

  user: any;
  shouldShow: boolean = true;
  feedback : string;

  constructor(
    private profile : ProfileService,
    private route  : ActivatedRoute,
    private session: SessionService
  ) { }

  ngOnInit() {
    if (this.session.user){
      this.user = this.session.user;
    }

    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
      console.log("uploaded item");
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
      console.log("uploader error");
    };

  }

  update() {
    this.profile.edit(this.user).subscribe((res) => {
      console.log("hola", res);
    });
    this.uploader.onBuildItemForm = (item, form) => {
    };

    this.uploader.uploadAll();
  }

  toggle() {
    this.shouldShow = !this.shouldShow;
  }

}
