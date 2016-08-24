import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { User } from './../Models/User';
import { Observable } from 'rxjs/observable';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getUsers(): Observable<User[]> {
        return this.http.get('api/users')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log("Extract data: ", body);
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error!';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}