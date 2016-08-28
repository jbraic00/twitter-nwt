import { User } from './User';
import { Tweet } from './Tweet';

export class Comment {
    public id: number;
    public text: string;
    public user: User;
    public tweet: Tweet;

    constructor(id: number = 1, text: string, user: User, tweet: Tweet) {
        this.id = id;
        this.text = text;
        this.user = user;
        this.tweet = tweet;
    }
}