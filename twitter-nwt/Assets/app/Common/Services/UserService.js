"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var observable_1 = require('rxjs/observable');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get('api/users')
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.updateUser = function (user) {
        var updatedUser = {
            Id: user.id,
            Username: user.username,
            Password: user.password,
            Name: user.name,
            Lastname: user.lastname,
            Email: user.email
        };
        var body = JSON.stringify(updatedUser);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log("In updateUser()!");
        console.log(body);
        return this.http.put('api/users/update', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.addUser = function (user) {
        var newUser = {
            Id: user.id,
            Username: user.username,
            Password: user.password,
            Name: user.name,
            Lastname: user.lastname,
            Email: user.email
        };
        var body = JSON.stringify(newUser);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log("In addUser()!");
        console.log(body);
        return this.http.post('api/users/add', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("Extract data: ", body);
        return body || {};
    };
    UserService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error!';
        console.log(errMsg);
        return observable_1.Observable.throw(errMsg);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map