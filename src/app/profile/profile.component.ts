import { Component, OnInit } from '@angular/core';
import { IsAdminService   } from '../services/is-admin.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {



  constructor(
    private session : SessionService
  ) { }

  ngOnInit() {
  }

  // checkRole(){
  //   this.isAdmin.getRole()
  //     .subscribe((admin) => {
  //       this.admin = admin;
  //     });
}
