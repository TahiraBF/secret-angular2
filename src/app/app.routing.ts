import { Routes } from '@angular/router';

import { AppComponent     } from './app.component';
import { HomeComponent    } from './home/home.component';
import { LoginComponent   } from './login/login.component';
import { SignupComponent  } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { SessionService   } from './services/session.service';
import { IsLoggedInService   } from './services/is-logged-in.service';
import { IsAdminService   } from './services/is-admin.service';

import { AdminComponent } from './admin/admin.component';




export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [SessionService] },
    { path: 'admin', component: AdminComponent, canActivate: [SessionService]}
    // { path: 'phone/:id', component: PhoneDetailsComponent, canActivate: [SessionService] },
    // { path: '**', redirectTo: '' }
];
