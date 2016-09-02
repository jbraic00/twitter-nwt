import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { TweetService } from './../Common/Services/TweetService';
import { UserService } from './../Common/Services/UserService';
import { Tweet } from './../Common/Models/Tweet';
import { User } from './../Common/Models/User';

@Component({
    moduleId: module.id,
    selector: 'tweets-list',
    templateUrl: 'tweets-list.template.html',
    styleUrls: ['./../../../../Content/tweets-list-style.css'],
})

export class TweetsListComponent implements OnInit {
    errorMessage: any;
    tweets: Tweet[];
    followingUsers: User[];
    currentUser: User;
    constructor(private tweetService: TweetService, private userService: UserService, private router: Router) { }

    /*getTweets() {
        this.tweetService.getTweets()
            .subscribe(
            tweets => { this.tweets = tweets; console.log('svi tweetovi',this.tweets); },
            error => this.errorMessage = <any>error
            );
    }*/

    getFollowingTweets() {
        this.followingUsers = this.currentUser.followingUsers;
        let allUsers = this.followingUsers;
        for (let user of allUsers) {
            this.tweets.push.apply(this.tweets, user.myTweets);
        }

        console.log('useri:', this.followingUsers);
        console.log('tweetovi?:', this.tweets);
        
    }

    ngOnInit(): void {
        this.tweets = [];
        this.currentUser = this.userService.currentUser;
        this.getFollowingTweets();        
    }

    goToProfile(id: number) {
        this.router.navigate(['/dashboard/others-profile', id]);
    }
}