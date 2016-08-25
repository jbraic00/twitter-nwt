import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { TweetService } from './../Common/Services/TweetService';
import { Tweet } from './../Common/Models/Tweet';

@Component({
    selector: 'tweets-list',
    template: `<h3>Tweets list:</h3>
                <ul>
                  <li *ngFor="let tweet of tweets">
                    {{tweet.Text}}
                  </li>
                </ul>
              `,
    providers: [TweetService]
})

export class TweetsListComponent implements OnInit {
    errorMessage: any;
    tweets: Tweet[];

    constructor(private tweetService: TweetService) { }

    getTweets() {
        this.tweetService.getTweets()
            .subscribe(
            tweets => { this.tweets = tweets; console.log(this.tweets) },
            error => this.errorMessage = <any>error
            );
    } 

    ngOnInit(): void {
        this.getTweets();        
    }

}