import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { User } from './../Models/User';
import { Observable } from 'rxjs/observable';

@Injectable()
export class UserService {
    allUsers: User[];
    currentUser: User;
    errorMessage: string;

    constructor(private http: Http) { this.getAllUsers(); }

    getAllUsers(): void {
        this.getUsers()
            .subscribe(
            users => { this.allUsers = users; console.log("Users in user service: ", this.allUsers); },
            error => this.errorMessage = <any>error
            );
    }

    getUsers(): Observable<User[]> {
        return this.http.get('api/users')
            .map(this.extractData)
            .catch(this.handleError);
    }

    getUserById(id: number): User {
        return this.allUsers.find(user => user.id == id);
    }

    updateUser(user: User): Observable<User> {
        let updatedUser = {
            Id: user.id,
            Username: user.username,
            Password: user.password,
            Name: user.name,
            Lastname: user.lastname,
            Email: user.email
        };
        let body = JSON.stringify(updatedUser);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log("In updateUser()!");
        console.log(body);
        return this.http.put('api/users/update', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addUser(user: User): Observable<User> {
        let newUser = {
            Id: user.id,
            Username: user.username,
            Password: user.password,
            Name: user.name,
            Lastname: user.lastname,
            Email: user.email
        };
        let body = JSON.stringify(newUser);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log("In addUser()!");
        console.log(body);
        return this.http.post('api/users/add', body, options)
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

    checkIfUsernameExists(username: string): boolean {
        for (var i = 0; i < this.allUsers.length; i++) {
            if (this.allUsers[i].username == username) {
                return true;
            }
        }
        return false;
    }

    checkIfPasswordExists(password: string): boolean {
        for (var i = 0; i < this.allUsers.length; i++) {
            if (this.allUsers[i].password == password) {
                return true;
            }
        }
        return false;
    }

    saveCurrentUser(username: string): void {
        for (let user of this.allUsers) {
            if (user.username == username) {
                this.currentUser = user;
            }
        }
        console.log("Saved current user: ", this.currentUser);
    }

    registerUser(user: User): void {
        this.currentUser = user;
        this.allUsers.push(user);
    }
}