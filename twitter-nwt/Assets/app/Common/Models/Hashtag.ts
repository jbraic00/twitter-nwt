import { Tweet } from './Tweet';

export class Hashtag {
    public id: number;
    public text: string;
    public tweets: Tweet[];

    constructor(id: number = 1, text: string, tweets: Tweet[] = []) {
        this.id = id;
        this.text = text;
        this.tweets = tweets;
    }
}