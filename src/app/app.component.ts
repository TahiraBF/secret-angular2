import { Component } from '@angular/core';
import { SessionService} from './services/session.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  user : any;

  constructor(
    private session : SessionService,
  ) {}


  ngOnInit() {
    if (this.session.user){
      this.user = this.session.user;
    }
  }


  logout(){
    this.session.logout();
  }


}
