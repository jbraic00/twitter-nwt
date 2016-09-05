import { Pipe, PipeTransform } from '@angular/core';

import { Tweet } from './../Models/Tweet';

@Pipe({ name: 'contains', pure: false })

export class ContainsPipe {
    transform(tweets: Tweet[], keyword: string) {
        if (keyword == null || keyword.trim() == '') { return tweets; }

        if (keyword.indexOf('#') == -1) { keyword = '#' + keyword; }

        keyword = keyword.toLowerCase();

        return tweets.filter(tweet => tweet.text.toLowerCase().indexOf(keyword) != -1);
    }
}