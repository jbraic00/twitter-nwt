import { Component } from '@angular/core';

import { UserService } from './Common/Services/UserService';

// Add the RxJS Observable operators we need in this app.
//import './rxjs-operators';

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>'
})

export class AppComponent {
    constructor(private userService: UserService) { }
}