using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using System.Web;
using twitter_nwt.DAL;
using twitter_nwt.Models;
using twitter_nwt.Models.DTO;

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
                    var tweets = context.Tweets.Include(x => x.User).Include(x => x.Hashtags).Include(x => x.Comments).ToList();
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

        public Tweet AddTweet(AddTweetDTO newTweet)
        {
            using (var context = new TwitterContext())
            {
                try
                {
                    var user = context.Users.Include(x => x.MyTweets).Include(x => x.FollowingUsers).Include(x => x.FollowedBy).FirstOrDefault(u => u.Id == newTweet.UserId);
                    if (user == null)
                    {
                        throw new NullReferenceException("Error when getting user!");
                    }

                    Tweet tweet = new Tweet();
                    tweet.Id = GetNumberOfTweets() + 1;
                    tweet.TimeWhenTweeted = DateTime.Now;
                    tweet.Text = newTweet.Text;
                    tweet.User = user;
                    tweet.Hashtags = newTweet.Hashtags;

                    context.Tweets.Add(tweet);
                    context.SaveChanges();
                    return tweet;
                }
                catch (Exception e)
                {
                    throw new Exception("Could not add new user. Exception: " + e.Message);
                }
            }
        }

        public int GetNumberOfTweets()
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
                    return tweets.Count;
                }
                catch (Exception e)
                {
                    throw new Exception("All tweets' list is null. Exception: " + e.Message);
                }
            }
        }
    }
}