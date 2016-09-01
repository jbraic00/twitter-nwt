import { Component, OnInit } from '@angular/core';
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
    followedTweets: Tweet[];
    currentUser: User;
    //followedBy: User[];
    constructor(private tweetService: TweetService, private userService: UserService ) { }

    getTweets() {
        this.tweetService.getTweets()
            .subscribe(
            tweets => { this.tweets = tweets; console.log('svi tweetovi',this.tweets); },
            error => this.errorMessage = <any>error
            );
    }

    getFollowingTweets() {
        let followingUsers = this.currentUser.followingUsers;
        console.log('svi koje follujem', followingUsers)
        for (let user of followingUsers) {
            console.log('user info:', user);
        }

    }

    ngOnInit(): void {
        this.currentUser = this.userService.currentUser;
        this.getTweets();
        this.getFollowingTweets();        
    }

}