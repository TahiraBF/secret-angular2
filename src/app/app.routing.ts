import { Routes } from '@angular/router';

import { AppComponent     } from './app.component';
import { HomeComponent    } from './home/home.component';
import { LoginComponent   } from './login/login.component';
import { SignupComponent  } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { SessionService   } from './services/session.service';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [SessionService] }
    // { path: 'phone', component: PhoneListComponent, canActivate: [SessionService] },
    // { path: 'phone/:id', component: PhoneDetailsComponent, canActivate: [SessionService] },
    // { path: '**', redirectTo: '' }
];
