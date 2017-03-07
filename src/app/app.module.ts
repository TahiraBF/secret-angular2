import { BrowserModule } from '@angular/platform-browser';
import { NgModule      } from '@angular/core';
import { FormsModule   } from '@angular/forms';
import { HttpModule    } from '@angular/http';
import { RouterModule  } from '@angular/router';
import { routes        } from './app.routing';
import { SessionService} from './services/session.service';
import { IsAdminService} from './services/is-admin.service';
import { ProfileService} from './services/profile.service';
import { FileSelectDirective  } from "ng2-file-upload";





import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
