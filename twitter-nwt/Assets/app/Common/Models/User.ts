import { Tweet } from './Tweet';
import { Comment } from './Comment';

export class User {
    public id: number;
    public username: string;
    public password: string;
    public name: string;
    public lastname: string;
    public email: string;
    public myTweets: Tweet[];
    public favoritedTweets: Tweet[];
    public followingUsers: User[];
    public followedBy: User[];
    public comments: Comment[];

    constructor(id: number = 1, username: string = "", password: string = "", name: string = "", lastname: string = "", email: string = "", myTweets: Tweet[] = [], favoritedTweets: Tweet[] = [], followingUsers: User[] = [], followedBy: User[] = [], comments: Comment[] = []) {
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

    public getFullName(): string {
        return this.name + " " + this.lastname;
    }
}