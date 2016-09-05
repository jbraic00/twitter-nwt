import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { TweetService } from './../Common/Services/TweetService';
import { UserService } from './../Common/Services/UserService';
import { Tweet } from './../Common/Models/Tweet';
import { User } from './../Common/Models/User';
import { Hashtag } from './../Common/Models/Hashtag';

@Component({
    moduleId: module.id,
    selector: 'tweets-list',
    templateUrl: 'tweets-list.template.html',
    styleUrls: ['./../../../../Content/tweets-list-style.css'],
})

export class TweetsListComponent implements OnInit {
    errorMessage: any;
    newText: string = '';
    hashtags: Hashtag[] = [];
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

    getFollowingTweets() {
        this.followingUsers = this.currentUser.followingUsers;
        let allUsers = this.followingUsers;
        for (let user of allUsers) {
            this.tweets.push.apply(this.tweets, user.myTweets);
        }

        this.tweets.push.apply(this.tweets, this.currentUser.myTweets);

        for (let tweet of this.tweets) {
            var testTweet = this.allTweets.find(item => (item.text == tweet.text));
            if (testTweet != undefined) {
                this.filteredTweets.push(testTweet);
            }
        }

        this.filteredTweets.sort(function (a, b) {
            if (b.timeWhenTweeted < a.timeWhenTweeted) {
                return -1;
            } else if (b.timeWhenTweeted > a.timeWhenTweeted) {
                return 1;
            } else
                return 0;
        });

    }

    getHashtags(data: string): Hashtag[] {

        var hashtaginfo: string;
        var dataFirstPart: string;
        var dataSecondPart: string;

        var i: number;
        var newHashtags: Hashtag[] = [];

        var startIndex = data.indexOf("#");
        while (startIndex != -1) {
            hashtaginfo = "";
            for (i = startIndex; data[i] != " " && i < data.length; i++) {
                hashtaginfo = hashtaginfo.concat(data[i]);
            }
            dataFirstPart = data.slice(0, startIndex);
            dataSecondPart = data.slice(startIndex + hashtaginfo.length, data.length);
            data = dataFirstPart.concat(dataSecondPart);

            newHashtags.push(new Hashtag(hashtaginfo));

            startIndex = data.indexOf("#");
        }

        return newHashtags;
    }

    publishNewTweet() {
        var newTweet = {
            Text: this.newText,
            Hashtags: this.hashtags,
            UserId: this.currentUser.id
        }

        newTweet.Hashtags = this.getHashtags(this.newText);

        this.tweetService.addTweet(newTweet)
            .subscribe(
            tweet => { this.filteredTweets.unshift(tweet); this.newText = ''; },
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