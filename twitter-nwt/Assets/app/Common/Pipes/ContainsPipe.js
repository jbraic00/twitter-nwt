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
var ContainsPipe = (function () {
    function ContainsPipe() {
    }
    ContainsPipe.prototype.transform = function (tweets, keyword) {
        if (keyword == null || keyword.trim() == '') {
            return tweets;
        }
        if (keyword.indexOf('#') == -1) {
            keyword = '#' + keyword;
        }
        keyword = keyword.toLowerCase();
        return tweets.filter(function (tweet) { return tweet.text.toLowerCase().indexOf(keyword) != -1; });
    };
    ContainsPipe = __decorate([
        core_1.Pipe({ name: 'contains', pure: false }), 
        __metadata('design:paramtypes', [])
    ], ContainsPipe);
    return ContainsPipe;
}());
exports.ContainsPipe = ContainsPipe;
//# sourceMappingURL=ContainsPipe.js.map