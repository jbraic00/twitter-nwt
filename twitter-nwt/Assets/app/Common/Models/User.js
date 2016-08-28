"use strict";
var User = (function () {
    function User(id, username, password, name, lastname, email, myTweets, favoritedTweets, followingUsers, followedBy, comments) {
        if (id === void 0) { id = 1; }
        if (username === void 0) { username = ""; }
        if (password === void 0) { password = ""; }
        if (name === void 0) { name = ""; }
        if (lastname === void 0) { lastname = ""; }
        if (email === void 0) { email = ""; }
        if (myTweets === void 0) { myTweets = []; }
        if (favoritedTweets === void 0) { favoritedTweets = []; }
        if (followingUsers === void 0) { followingUsers = []; }
        if (followedBy === void 0) { followedBy = []; }
        if (comments === void 0) { comments = []; }
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.myTweets = myTweets;
        this.favoritedTweets = favoritedTweets;
        this.followingUsers = followingUsers;
        this.followedBy = followedBy;
        this.comments = comments;
    }
    User.prototype.getFullName = function () {
        return this.name + " " + this.lastname;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map