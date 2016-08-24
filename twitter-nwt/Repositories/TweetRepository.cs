﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using twitter_nwt.DAL;
using twitter_nwt.Models;

namespace twitter_nwt.Repositories
{
    public class TweetRepository
    {
        public IList<Tweet> GetAllTweets()
        {
            using (var context = new TwitterContext())
            {
                try
                {
                    var tweets = context.Tweets.ToList();
                    if (tweets.Count == 0)
                    {
                        throw new NullReferenceException("Error when getting all tweets!");
                    }
                    return tweets;
                }
                catch (Exception e)
                {
                    throw new Exception("All tweets' list is null. Exception: " + e.Message);
                }
            }
        }
    }
}