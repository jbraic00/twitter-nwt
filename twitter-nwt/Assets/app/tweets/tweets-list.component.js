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
var TweetsListComponent = (function () {
    function TweetsListComponent(tweetService) {
        this.tweetService = tweetService;
    }
    TweetsListComponent.prototype.getTweets = function () {
        var _this = this;
        this.tweetService.getTweets()
            .subscribe(function (tweets) { _this.tweets = tweets; console.log(_this.tweets); }, function (error) { return _this.errorMessage = error; });
    };
    TweetsListComponent.prototype.ngOnInit = function () {
        this.getTweets();
    };
    TweetsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tweets-list',
            templateUrl: 'tweets-list.template.html',
            providers: [TweetService_1.TweetService]
        }), 
        __metadata('design:paramtypes', [TweetService_1.TweetService])
    ], TweetsListComponent);
    return TweetsListComponent;
}());
exports.TweetsListComponent = TweetsListComponent;
//# sourceMappingURL=tweets-list.component.js.map