import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './../profile/profile.component';
import { TweetsListComponent } from './../tweets/tweets-list.component';
import { UserRegistrationComponent } from './../user-registration/user-registration.component';
import { UserLogInComponent } from './../user-log-in/user-log-in.component';
import { OthersProfileComponent } from './../others-profile/others-profile.component';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent, children: [
            { path: '', component: UserLogInComponent },
            { path: 'tweets-list', component: TweetsListComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'user-registration', component: UserRegistrationComponent },
            { path: 'others-profile/:id', component: OthersProfileComponent },
        ]
    }
];

export const dashboardRouting = RouterModule.forChild(dashboardRoutes);