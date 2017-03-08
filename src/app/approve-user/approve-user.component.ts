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
  userId;


  constructor(
    private profile : ProfileService,
    private route  : ActivatedRoute,
    private session: SessionService,
    private router: Router

  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.userId = params['id']
      this.getEntryById(this.userId);
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
    this.profile.approveUser(this.userId, this.user);
  }

  deleteUser() {
  if (window.confirm('Are you sure?')) {
    this.profile.remove(this.userId)
    .subscribe(() => {
      this.router.navigate(['/api/profile']);
    });
  }
}

}
