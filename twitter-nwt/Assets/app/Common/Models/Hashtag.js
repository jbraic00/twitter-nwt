"use strict";
var Hashtag = (function () {
    function Hashtag(text, id, tweets) {
        if (text === void 0) { text = ''; }
        if (id === void 0) { id = 1; }
        if (tweets === void 0) { tweets = []; }
        this.id = id;
        this.text = text;
        this.tweets = tweets;
    }
    return Hashtag;
}());
exports.Hashtag = Hashtag;
//# sourceMappingURL=Hashtag.js.map