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
var router_1 = require('@angular/router');
var TweetService_1 = require('./../Common/Services/TweetService');
var UserService_1 = require('./../Common/Services/UserService');
var Hashtag_1 = require('./../Common/Models/Hashtag');
var TweetsListComponent = (function () {
    function TweetsListComponent(tweetService, userService, router) {
        this.tweetService = tweetService;
        this.userService = userService;
        this.router = router;
        this.newText = '';
        this.hashtags = [];
    }
    TweetsListComponent.prototype.getTweets = function () {
        var _this = this;
        this.tweetService.getTweets()
            .subscribe(function (allTweets) {
            _this.allTweets = allTweets;
            console.log('svi tweetovi', _this.allTweets);
            _this.getFollowingTweets();
        }, function (error) { return _this.errorMessage = error; });
    };
    TweetsListComponent.prototype.getFollowingTweets = function () {
        this.followingUsers = this.currentUser.followingUsers;
        var allUsers = this.followingUsers;
        for (var _i = 0, allUsers_1 = allUsers; _i < allUsers_1.length; _i++) {
            var user = allUsers_1[_i];
            this.tweets.push.apply(this.tweets, user.myTweets);
        }
        this.tweets.push.apply(this.tweets, this.currentUser.myTweets);
        console.log('useri:', this.followingUsers);
        console.log('tweetovi?:', this.tweets);
        var _loop_1 = function(tweet) {
            testTweet = this_1.allTweets.find(function (item) { return (item.text == tweet.text); });
            if (testTweet != undefined) {
                this_1.filteredTweets.push(testTweet);
            }
        };
        var this_1 = this;
        var testTweet;
        for (var _a = 0, _b = this.tweets; _a < _b.length; _a++) {
            var tweet = _b[_a];
            _loop_1(tweet);
        }
        console.log('filtrirani?:', this.filteredTweets);
        this.filteredTweets.sort(function (a, b) {
            if (b.timeWhenTweeted < a.timeWhenTweeted) {
                return -1;
            }
            else if (b.timeWhenTweeted > a.timeWhenTweeted) {
                return 1;
            }
            else
                return 0;
        });
        console.log('filtrirani sortirani:', this.filteredTweets);
    };
    TweetsListComponent.prototype.ngOnInit = function () {
        this.tweets = [];
        this.filteredTweets = [];
        this.currentUser = this.userService.currentUser;
        this.getTweets();
    };
    TweetsListComponent.prototype.getHashtags = function (data) {
        var hashtaginfo;
        var dataFirstPart;
        var dataSecondPart;
        var i;
        var newHashtags = [];
        var startIndex = data.indexOf("#");
        while (startIndex != -1) {
            hashtaginfo = "";
            for (i = startIndex; data[i] != " " && i < data.length; i++) {
                hashtaginfo = hashtaginfo.concat(data[i]);
            }
            dataFirstPart = data.slice(0, startIndex);
            dataSecondPart = data.slice(startIndex + hashtaginfo.length, data.length);
            data = dataFirstPart.concat(dataSecondPart);
            newHashtags.push(new Hashtag_1.Hashtag(hashtaginfo));
            startIndex = data.indexOf("#");
        }
        return newHashtags;
    };
    TweetsListComponent.prototype.publishNewTweet = function () {
        var _this = this;
        var newTweet = {
            Text: this.newText,
            Hashtags: this.hashtags,
            UserId: this.currentUser.id
        };
        newTweet.Hashtags = this.getHashtags(this.newText);
        console.log('publish call new tweet', newTweet);
        this.tweetService.addTweet(newTweet)
            .subscribe(function (tweet) { console.log("New tweet: ", tweet); _this.filteredTweets.unshift(tweet); _this.newText = ''; }, function (error) { return _this.errorMessage = error; });
    };
    TweetsListComponent.prototype.goToProfile = function (id) {
        if (id == this.currentUser.id) {
            this.router.navigate(['/dashboard/profile']);
        }
        else {
            this.router.navigate(['/dashboard/others-profile', id]);
        }
    };
    TweetsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tweets-list',
            templateUrl: 'tweets-list.template.html',
            styleUrls: ['./../../../../Content/tweets-list-style.css'],
        }), 
        __metadata('design:paramtypes', [TweetService_1.TweetService, UserService_1.UserService, router_1.Router])
    ], TweetsListComponent);
    return TweetsListComponent;
}());
exports.TweetsListComponent = TweetsListComponent;
//# sourceMappingURL=tweets-list.component.js.map