import { Component, OnInit } from '@angular/core';

import { FORM_DIRECTIVES } from '@angular/common';

import { User } from './../Common/Models/User';
import { UserService } from './../Common/Services/UserService';

@Component({
    moduleId: module.id,
    selector: 'my-profile',
    templateUrl: 'profile.template.html',
    directives: [FORM_DIRECTIVES],
    styleUrls: ['./../../../../Content/forms.css']
})

export class ProfileComponent implements OnInit {
    errorMessage: string;
    users: User[];
    firstUser: User;
    updatedUser: any;
    editing: boolean = false;

    constructor(private userService: UserService) { }

    ngOnInit() { this.getUsers(); }

    getUsers() {
        //this.userService.getUsers()
        //    .subscribe(
        //    users => { this.users = users; console.log("Users: ", this.users); this.firstUser = this.users[0]; console.log(this.firstUser.myTweets); },
        //    error => this.errorMessage = <any>error
        //);
        this.users = this.userService.allUsers;
        this.firstUser = this.userService.currentUser;
        console.log("In component: ", this.firstUser);
    }

    updateUser() {
        this.editing = false;

        this.updatedUser = {
            id: this.firstUser.id,
            username: this.firstUser.username,
            password: this.firstUser.password,
            name: this.firstUser.name,
            lastname: this.firstUser.lastname,
            email: this.firstUser.email
        }
        this.userService.updateUser(this.updatedUser)
            .subscribe(
            user => { this.firstUser = user; console.log("Updated user data: ", this.firstUser); },
            error => this.errorMessage = <any>error
            );
    }
}