import {User} from "./User"
import {Hashtag} from "./Hashtag"
import {Comment} from "./Comment"

export class Tweet {
    public ID: number;
    public user: User;
    public timeWhenTweeted: Date;
    public text: string;
    public hashtags: Hashtag[];
    public comments: Comment[];

    constructor(ID: number, user: User, timeWhenTweeted: Date, text: string, hashtags: Hashtag[] = [], comments: Comment[] = []) {
        this.ID = ID;
        this.user = user;
        this.timeWhenTweeted = timeWhenTweeted;
        this.text = text;
        this.hashtags = hashtags;
        this.comments = comments;
    }
}