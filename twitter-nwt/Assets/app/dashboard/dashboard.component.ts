import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    template: `
        <a class="btn btn-primary" routerLink="/dashboard" routerLinkActive="active">Tweets</a>
        <a class="btn btn-danger" routerLink="/dashboard/profile" routerLinkActive="active">Profile</a>
        <router-outlet></router-outlet>
    `
})

export class DashboardComponent { }