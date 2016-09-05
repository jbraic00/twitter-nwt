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
    newText: string = ''; 
    tweets: Tweet[];
    allTweets: Tweet[];
    filteredTweets: Tweet[];
    followingUsers: User[];
    currentUser: User;
    searchKeyword: string = '';

    ngOnInit(): void {
        this.tweets = [];
        this.filteredTweets = [];
        this.currentUser = this.userService.currentUser;
        this.getTweets();
    }

    constructor(private tweetService: TweetService, private userService: UserService, private router: Router) { }

    getTweets() {
        this.tweetService.getTweets()
            .subscribe(
            allTweets => {
                            this.allTweets = allTweets;
                            console.log('svi tweetovi', this.allTweets);
                            this.getFollowingTweets();
                          },
            error => this.errorMessage = <any>error
        );

    }

    /**
     * Next time do this on backend!!!
     * News feed has to have tweets of users that is loged in and of the users he follows 
     */
    getFollowingTweets() {
        this.followingUsers = this.currentUser.followingUsers;
        let allUsers = this.followingUsers;
        for (let user of allUsers) {
            this.tweets.push.apply(this.tweets, user.myTweets);
        }

        this.tweets.push.apply(this.tweets, this.currentUser.myTweets);

        console.log('useri:', this.followingUsers);
        console.log('tweetovi?:', this.tweets);

        for (let tweet of this.tweets) { 
            var testTweet = this.allTweets.find(item => (item.text == tweet.text));
            if (testTweet != undefined) {
                this.filteredTweets.push(testTweet);
            }
        }

        console.log('filtrirani?:', this.filteredTweets);

        this.filteredTweets.sort(function (a, b) {
            if (b.timeWhenTweeted < a.timeWhenTweeted) {
                return -1;
            } else if (b.timeWhenTweeted > a.timeWhenTweeted) {
                return 1;
            } else
                return 0;
        });

        console.log('filtrirani sortirani:', this.filteredTweets);

    }
    
    publishNewTweet() {
        var newTweet = {
            Text: this.newText,
            Hashtags: [],
            UserId: this.currentUser.id
        }
        console.log('publish call new tweet', newTweet);
        this.tweetService.addTweet(newTweet)
            .subscribe(
            tweet => { console.log("New tweet: ", tweet); this.filteredTweets.unshift(tweet); this.newText = ''; },
            error => this.errorMessage = <any>error
            );
    }

    goToProfile(id: number) {
        if (id == this.currentUser.id) {
            this.router.navigate(['/dashboard/profile']);
        }
        else {
            this.router.navigate(['/dashboard/others-profile', id]);
        }
    }
}