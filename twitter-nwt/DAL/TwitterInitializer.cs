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
            var user1 = new User() { Id = 1, Username = "Joker", Password = "joker", Name = "Melvin", Lastname = "White", Email = "joker@d.c" };
            var user2 = new User() { Id = 2, Username = "Harley", Password = "harley", Name = "Harley", Lastname = "Quinn", Email = "harley@d.c" };
            var user3 = new User() { Id = 3, Username = "Aquaman", Password = "aquaman", Name = "Arthur", Lastname = "Curry", Email = "aqua@d.c" };

            var tweet1 = new Tweet() { Id = 1, Text = "Had the best time evaa #craziness #friendship", TimeWhenTweeted = new DateTime(2016, 5, 31, 8, 0, 0), User = user1 };
            var tweet2 = new Tweet() { Id = 2, Text = "Finally went somewhere! #craziness", TimeWhenTweeted = new DateTime(2016, 6, 1, 23, 0, 0), User = user2 };

            var hashtag1 = new Hashtag() { Id = 1, Text = "#craziness", Tweets = new List<Tweet>() { tweet1, tweet2 } };
            var hashtag2 = new Hashtag() { Id = 2, Text = "#friendship", Tweets = new List<Tweet>() { tweet1 } };

            var comment1 = new Comment() { Id = 1, Text = "Lucky you!", Tweet = tweet1, User = user1 };
            var comment2 = new Comment() { Id = 2, Text = "Jealous...", Tweet = tweet2, User = user2 };

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