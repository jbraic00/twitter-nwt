"use strict";
var Tweet = (function () {
    function Tweet(id, user, timeWhenTweeted, text, hashtags, comments) {
        if (id === void 0) { id = Math.random(); }
        if (hashtags === void 0) { hashtags = []; }
        if (comments === void 0) { comments = []; }
        this.id = id;
        this.user = user;
        this.timeWhenTweeted = timeWhenTweeted;
        this.text = text;
        this.hashtags = hashtags;
        this.comments = comments;
    }
    return Tweet;
}());
exports.Tweet = Tweet;
//# sourceMappingURL=Tweet.js.map