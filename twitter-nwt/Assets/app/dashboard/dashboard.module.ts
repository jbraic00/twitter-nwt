import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './../profile/profile.component';
import { TweetsListComponent } from './../tweets/tweets-list.component';
import { UserRegistrationComponent } from './../user-registration/user-registration.component';

import { dashboardRouting } from './dashboard.routing';

@NgModule({
    imports: [CommonModule, dashboardRouting],
    declarations: [DashboardComponent, ProfileComponent, TweetsListComponent, UserRegistrationComponent]
})

export class DashboardModule { }