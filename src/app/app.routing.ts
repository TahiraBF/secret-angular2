import { Routes } from '@angular/router';

import { AppComponent     } from './app.component';
import { HomeComponent    } from './home/home.component';
import { LoginComponent   } from './login/login.component';
import { SignupComponent  } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { SecretsComponent } from './secrets/secrets.component';
import { SessionService   } from './services/session.service';
import { IsAdminService   } from './services/is-admin.service';
import { ProfileService   } from './services/profile.service';
import { SecretsService   } from './services/secrets.service';
import { ApproveUserComponent } from './approve-user/approve-user.component';
import { AddReferralComponent } from './add-referral/add-referral.component';
import { AddSecretComponent } from './add-secret/add-secret.component';
import { AdminComponent } from './admin/admin.component';
import { SearchComponent } from './search/search.component';
import { FeaturedSecretComponent } from './featured-secret/featured-secret.component';
import { PendingUserComponent } from './pending-user/pending-user.component';
import { MapComponent } from './map/map.component';





export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'api/profile', component: ProfileComponent, canActivate: [SessionService],
    children:[
      { path: 'refer', component: AddReferralComponent, canActivate: [SessionService] },
      { path: 'approve-users', component: PendingUserComponent, canActivate: [SessionService] }
    ]
   },
    { path: 'api/profile/map', component: MapComponent, canActivate: [SessionService]},
    { path: 'api/profile/approve-users/:id', component: ApproveUserComponent, canActivate: [SessionService] },
    { path: 'api/secrets', component: SecretsComponent, canActivate: [SessionService]},
    { path: 'api/secrets/add', component: AddSecretComponent, canActivate: [SessionService] },
    { path: 'api/secrets/featured', component: FeaturedSecretComponent, canActivate: [SessionService] },
    { path: 'api/secrets/search', component: SearchComponent, canActivate: [SessionService] }

];
