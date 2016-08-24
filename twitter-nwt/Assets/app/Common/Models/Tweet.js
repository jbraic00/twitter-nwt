"use strict";
var Tweet = (function () {
    function Tweet(ID, user, timeWhenTweeted, text, hashtags, comments) {
        if (hashtags === void 0) { hashtags = []; }
        if (comments === void 0) { comments = []; }
        this.ID = ID;
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