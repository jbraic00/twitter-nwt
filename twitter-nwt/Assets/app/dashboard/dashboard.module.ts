import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './../profile/profile.component';
import { TweetsListComponent } from './../tweets/tweets-list.component';
import { UserRegistrationComponent } from './../user-registration/user-registration.component';
import { UserLogInComponent } from './../user-log-in/user-log-in.component';
import { OthersProfileComponent } from './../others-profile/others-profile.component';

import { dashboardRouting } from './dashboard.routing';

@NgModule({
    imports: [CommonModule, dashboardRouting],
    declarations: [DashboardComponent, ProfileComponent, TweetsListComponent, UserRegistrationComponent, UserLogInComponent, OthersProfileComponent]
})

export class DashboardModule { }