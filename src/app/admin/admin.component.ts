import { Component, OnInit } from '@angular/core';
import { IsAdminService } from '../services/is-admin.service';
import { Router} from '@angular/router';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };

  error: String;

  constructor(
    private isAdmin : IsAdminService,
    private router  : Router
  ) { }

  ngOnInit() {
  }


}
