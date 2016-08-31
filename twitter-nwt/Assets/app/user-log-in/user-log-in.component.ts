import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FORM_DIRECTIVES } from '@angular/common';

import { User } from './../Common/Models/User';
import { UserService } from './../Common/Services/UserService';

@Component({
    moduleId: module.id,
    selector: 'user-log-in-form',
    templateUrl: 'user-log-in.template.html',
    directives: [FORM_DIRECTIVES],
    styleUrls: ['./../../../../Content/forms.css']
})

export class UserLogInComponent {
    username: string;
    password: string;
    isUsernameInvalid: boolean = false;
    isPasswordInvalid: boolean = false;

    constructor(private userService: UserService, private router: Router) { }

    logIn() {
        if (!this.userService.checkIfUsernameExists(this.username)) {
            this.isUsernameInvalid = true;
        }
        else if (!this.userService.checkIfPasswordExists(this.password)) {
            this.isUsernameInvalid = false;
            this.isPasswordInvalid = true;
        }
        else {
            this.isPasswordInvalid = false;
            this.userService.saveCurrentUser(this.username);
            this.router.navigate(['/dashboard/tweets-list']);
        }
    }
}