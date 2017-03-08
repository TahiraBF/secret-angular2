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

import { AdminComponent } from './admin/admin.component';




export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'api/profile', component: ProfileComponent, canActivate: [SessionService] },
    { path: 'api/profile/:id', component: ApproveUserComponent, canActivate: [SessionService] },
    { path: 'api/secrets', component: SecretsComponent },
    // { path: 'admin', component: AdminComponent, canActivate: [SessionService]}
    // { path: '**', redirectTo: '' }
];
