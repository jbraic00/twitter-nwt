"use strict";
var Comment = (function () {
    function Comment(id, text, user, tweet) {
        if (id === void 0) { id = Math.random(); }
        this.id = id;
        this.text = text;
        this.user = user;
        this.tweet = tweet;
    }
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=Comment.js.map