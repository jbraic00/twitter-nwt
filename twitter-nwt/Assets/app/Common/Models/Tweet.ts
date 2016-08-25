import {User} from "./User"
import {Hashtag} from "./Hashtag"
import {Comment} from "./Comment"

export class Tweet {
    public id: number;
    public user: User;
    public timeWhenTweeted: Date;
    public text: string;
    public hashtags: Hashtag[];
    public comments: Comment[];

    constructor(id: number = Math.random(), user: User, timeWhenTweeted: Date, text: string, hashtags: Hashtag[] = [], comments: Comment[] = []) {
        this.id = id;
        this.user = user;
        this.timeWhenTweeted = timeWhenTweeted;
        this.text = text;
        this.hashtags = hashtags;
        this.comments = comments;
    }
}