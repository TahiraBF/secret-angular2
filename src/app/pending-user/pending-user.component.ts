import { Component, OnInit } from '@angular/core';
import { ProfileService         } from '../services/profile.service';
import { SessionService         } from '../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pending-user',
  templateUrl: './pending-user.component.html',
  styleUrls: ['./pending-user.component.css']
})
export class PendingUserComponent implements OnInit {

  pendingUsers: any;


  constructor(
    private profile : ProfileService,
    private route  : ActivatedRoute,
    private session: SessionService,
    private router  : Router
  ) { }

  ngOnInit() {
    this.getPendingUsers();
  }

  getPendingUsers() {
    this.profile.getProfile()
      .subscribe((pendingUsers)=> {
        this.pendingUsers = pendingUsers;
      })
  }

}
