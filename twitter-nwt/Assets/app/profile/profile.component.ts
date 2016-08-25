import { Component, OnInit } from '@angular/core';

import { User } from './../Common/Models/User';
import { UserService } from './../Common/Services/UserService';

@Component({
    selector: 'my-profile',
    template: '<h3>My profile</h3>',
    providers: [UserService]
})

export class ProfileComponent implements OnInit {
    errorMessage: string;
    users: User[];

    constructor(private userService: UserService) { }

    ngOnInit() { this.getUsers(); }

    getUsers() {
        this.userService.getUsers()
            .subscribe(
            users => { this.users = users; console.log("Users: ", this.users); console.log("First user's username: ", this.users[0].username); },
            error => this.errorMessage = <any>error
        );
    }
}