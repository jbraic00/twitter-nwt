import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { TweetService } from './../Common/Services/TweetService';
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
    constructor(private tweetService: TweetService) { }

    getTweets() {
        this.tweetService.getTweets()
            .subscribe(
            tweets => { this.tweets = tweets; console.log(this.tweets); },
            error => this.errorMessage = <any>error
            );
    } 

    ngOnInit(): void {
        this.getTweets();        
    }

}