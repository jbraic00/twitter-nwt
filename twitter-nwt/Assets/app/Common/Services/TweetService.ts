import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Tweet }          from './../Models/Tweet';

@Injectable()
export class TweetService {

    constructor(private http: Http) { }

    private tweetsUrl = 'api/tweets';

    getTweets(): Observable<Tweet[]> {
        return this.http.get(this.tweetsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addTweet(tweet): Observable<Tweet> {

        let body = JSON.stringify(tweet);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        console.log("In addTweet()!");
        console.log(body);
        return this.http.post('api/tweets/add', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    private handleError(error: any) {

        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}