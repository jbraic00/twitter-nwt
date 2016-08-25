using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;
using twitter_nwt.Models;

namespace twitter_nwt.DAL
{
    public class TwitterInitializer: DropCreateDatabaseAlways<TwitterContext>
    {
        protected override void Seed(TwitterContext context)
        {
            var user1 = new User() { Id = 1, Username = "User1", Password = "Pass1", Name = "Name1", Lastname = "Lastname1", Email = "user1@a.b" };
            var user2 = new User() { Id = 2, Username = "User2", Password = "Pass2", Name = "Name2", Lastname = "Lastname2", Email = "user2@a.b" };
            var user3 = new User() { Id = 3, Username = "User3", Password = "Pass3", Name = "Name3", Lastname = "Lastname3", Email = "user3@a.b" };

            var tweet1 = new Tweet() { Id = 1, Text = "Tweet1", TimeWhenTweeted = DateTime.Now, User = user1 };
            var tweet2 = new Tweet() { Id = 2, Text = "Tweet2", TimeWhenTweeted = DateTime.Now, User = user2 };

            var hashtag1 = new Hashtag() { Id = 1, Text = "#Hashtag1", Tweets = new List<Tweet>() { tweet1, tweet2 } };
            var hashtag2 = new Hashtag() { Id = 2, Text = "#Hashtag2", Tweets = new List<Tweet>() { tweet1 } };

            var comment1 = new Comment() { Id = 1, Text = "Comment1", Tweet = tweet1, User = user1 };
            var comment2 = new Comment() { Id = 2, Text = "Comment2", Tweet = tweet2, User = user2 };

            user1.MyTweets = new List<Tweet>() { tweet1 };
            user1.FavoritedTweets = new List<Tweet>();
            user1.FollowingUsers = new List<User>() { user2 };
            user1.FollowedBy = new List<User>() { user3 };
            user1.Comments = new List<Comment>() { comment1 };

            user2.MyTweets = new List<Tweet>() { tweet2 };
            user2.FavoritedTweets = new List<Tweet>() { tweet1 };
            user2.FollowingUsers = new List<User>() { user3 };
            user2.FollowedBy = new List<User>() { user1, user3 };
            user2.Comments = new List<Comment>() { comment2 };

            user3.MyTweets = new List<Tweet>();
            user3.FavoritedTweets = new List<Tweet>() { tweet1, tweet2 };
            user3.FollowingUsers = new List<User>() { user1, user2 };
            user3.FollowedBy = new List<User>() { user2 };
            user3.Comments = new List<Comment>();

            tweet1.UsersThatFavorited = new List<User>() { user2, user3 };
            tweet1.Hashtags = new List<Hashtag>() { hashtag1, hashtag2 };
            tweet1.Comments = new List<Comment>() { comment1 };

            tweet2.UsersThatFavorited = new List<User>() { user3 };
            tweet2.Hashtags = new List<Hashtag>() { hashtag1 };
            tweet2.Comments = new List<Comment>() { comment2 };

            context.Comments.AddOrUpdate(comment1);
            context.Comments.AddOrUpdate(comment2);
            context.SaveChanges();

            context.Hashtags.AddOrUpdate(hashtag1);
            context.Hashtags.AddOrUpdate(hashtag2);
            context.SaveChanges();

            context.Tweets.AddOrUpdate(tweet1);
            context.Tweets.AddOrUpdate(tweet2);
            context.SaveChanges();

            context.Users.AddOrUpdate(user1);
            context.Users.AddOrUpdate(user2);
            context.Users.AddOrUpdate(user3);

            context.SaveChanges();
        }
    }
}