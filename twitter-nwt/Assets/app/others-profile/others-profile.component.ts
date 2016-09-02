import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { User } from './../Common/Models/User';
import { UserService } from './../Common/Services/UserService';

@Component({
    moduleId: module.id,
    selector: 'others-profile',
    templateUrl: 'others-profile.template.html'
})

export class OthersProfileComponent implements OnInit {
    user: User;

    constructor(private userService: UserService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.user = this.userService.getUserById(id);
            console.log("Viewing users profile: ", this.user);
        });
    }
}