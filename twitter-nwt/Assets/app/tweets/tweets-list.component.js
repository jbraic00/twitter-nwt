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
var TweetService_1 = require('./../Common/Services/TweetService');
var UserService_1 = require('./../Common/Services/UserService');
var TweetsListComponent = (function () {
    function TweetsListComponent(tweetService, userService) {
        this.tweetService = tweetService;
        this.userService = userService;
    }
    TweetsListComponent.prototype.getFollowingTweets = function () {
        this.followingUsers = this.currentUser.followingUsers;
        var allUsers = this.followingUsers;
        for (var _i = 0, allUsers_1 = allUsers; _i < allUsers_1.length; _i++) {
            var user = allUsers_1[_i];
            this.tweets.push.apply(this.tweets, user.myTweets);
        }
        console.log('useri:', this.followingUsers);
        console.log('tweetovi?:', this.tweets);
    };
    TweetsListComponent.prototype.ngOnInit = function () {
        this.tweets = [];
        this.currentUser = this.userService.currentUser;
        this.getFollowingTweets();
    };
    TweetsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tweets-list',
            templateUrl: 'tweets-list.template.html',
            styleUrls: ['./../../../../Content/tweets-list-style.css'],
        }), 
        __metadata('design:paramtypes', [TweetService_1.TweetService, UserService_1.UserService])
    ], TweetsListComponent);
    return TweetsListComponent;
}());
exports.TweetsListComponent = TweetsListComponent;
//# sourceMappingURL=tweets-list.component.js.map