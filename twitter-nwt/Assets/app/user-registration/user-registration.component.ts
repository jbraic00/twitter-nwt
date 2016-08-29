import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FORM_DIRECTIVES } from '@angular/common';

import { User } from './../Common/Models/User';
import { UserService } from './../Common/Services/UserService';

@Component({
    moduleId: module.id,
    selector: 'user-registration-form',
    templateUrl: 'user-registration.template.html',
    directives: [FORM_DIRECTIVES],
    styleUrls: ['./../../../../Content/forms.css']
})

export class UserRegistrationComponent {
    newUser: User;
    password: string;
    errorMessage: string;

    constructor(private userService: UserService, private router: Router) {
        this.newUser = new User();
    }

    register() {
        console.log("Registering new user! New user: ", this.newUser);
        this.userService.addUser(this.newUser)
            .subscribe(
            user => { this.newUser = user; console.log("Updated user data: ", this.newUser); this.router.navigate(['/dashboard/tweets-list']); },
            error => this.errorMessage = <any>error
            );
    }
}