import { Component, OnInit } from '@angular/core';
import { IsAdminService   } from '../services/is-admin.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  admin;

  constructor(
    private isAdmin : IsAdminService
  ) { }

  ngOnInit() {
  }

  checkRole(){
    this.isAdmin.getRole()
      .subscribe((admin) => {
        this.admin = admin;
      });
  }
}
