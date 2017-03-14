import { BrowserModule } from '@angular/platform-browser';
import { NgModule      } from '@angular/core';
import { FormsModule   } from '@angular/forms';
import { HttpModule    } from '@angular/http';
import { RouterModule  } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { routes        } from './app.routing';
import { SessionService} from './services/session.service';
import { SecretsService} from './services/secrets.service';
import { IsAdminService} from './services/is-admin.service';
import { ProfileService} from './services/profile.service';
import { FileSelectDirective  } from "ng2-file-upload";
import { AgmCoreModule } from 'angular2-google-maps/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { ApproveUserComponent } from './approve-user/approve-user.component';
import { SecretsComponent } from './secrets/secrets.component';


import { AddSecretComponent } from './add-secret/add-secret.component';
import { AddReferralComponent } from './add-referral/add-referral.component';
import { SearchComponent } from './search/search.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturedSecretComponent } from './featured-secret/featured-secret.component';
import { OneSecretComponent } from './one-secret/one-secret.component';
import { PendingUserComponent } from './pending-user/pending-user.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    AdminComponent,
    ApproveUserComponent,
    SecretsComponent,
    AddSecretComponent,
    FileSelectDirective,
    AddReferralComponent,
    SearchComponent,
    FilterPipe,
    NavbarComponent,
    FeaturedSecretComponent,
    PendingUserComponent,
    MapComponent,
    OneSecretComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCWuTofnbPYobuakChc65kL_ITMOet0VEo'
    })
  ],
  providers: [SessionService, ProfileService, SecretsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
