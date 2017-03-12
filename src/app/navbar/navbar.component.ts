import { Component, OnInit } from '@angular/core';
import { SessionService    } from '../services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user;

  constructor(
    private session : SessionService
  ) { }

  ngOnInit() {
    if (this.session.user){
      this.user = this.session.user;
    }
  }

  logout(){
    this.session.logout();
  }

}
