import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './../profile/profile.component';
import { TweetsListComponent } from './../tweets/tweets-list.component';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent, children: [
            { path: '', component: TweetsListComponent },
            { path: 'profile', component: ProfileComponent }
        ]
    }
];

export const dashboardRouting = RouterModule.forChild(dashboardRoutes);