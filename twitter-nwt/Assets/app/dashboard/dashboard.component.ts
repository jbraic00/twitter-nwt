import { Component } from '@angular/core';

// Add the RxJS Observable operators we need in this app.
import './../rxjs-operators';

@Component({
    selector: 'dashboard',
    template: `
        <a class="btn btn-primary" routerLink="/dashboard/tweets-list" routerLinkActive="active">Tweets</a>
        <a class="btn btn-danger" routerLink="/dashboard/profile" routerLinkActive="active">Profile</a>
        <router-outlet></router-outlet>
    `
})

export class DashboardComponent { }