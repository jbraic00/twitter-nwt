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
            var tweet3 = new Tweet() { Id = 3, Text = "WoW: Legion is out!!!!!! #burninglegion", TimeWhenTweeted = new DateTime(2016, 8, 30, 10, 0, 0), User = user2 };
            var tweet4 = new Tweet() { Id = 4, Text = "who's playing WoW with me? #burninglegion", TimeWhenTweeted = new DateTime(2016, 8, 30, 11, 0, 0), User = user3 };

            var hashtag1 = new Hashtag() { Id = 1, Text = "#craziness", Tweets = new List<Tweet>() { tweet1, tweet2 } };
            var hashtag2 = new Hashtag() { Id = 2, Text = "#friendship", Tweets = new List<Tweet>() { tweet1 } };
            var hashtag3 = new Hashtag() { Id = 3, Text = "#burninglegion", Tweets = new List<Tweet>() { tweet3, tweet4 } };

            var comment1 = new Comment() { Id = 1, Text = "Lucky you!", Tweet = tweet1, User = user1 };
            var comment2 = new Comment() { Id = 2, Text = "Jealous...", Tweet = tweet2, User = user2 };
            var comment3 = new Comment() { Id = 3, Text = "still recovering after that 24h stream session", Tweet = tweet3, User = user1 };
            var comment4 = new Comment() { Id = 4, Text = "haha", Tweet = tweet3, User = user3 };
            var comment5 = new Comment() { Id = 5, Text = "waiting for you! ;)", Tweet = tweet4, User = user2 };

            user1.MyTweets = new List<Tweet>() { tweet1 };
            user1.FavoritedTweets = new List<Tweet>() { tweet3 };
            user1.FollowingUsers = new List<User>() { user2 };
            user1.FollowedBy = new List<User>() { user3 };
            user1.Comments = new List<Comment>() { comment1, comment3 };

            user2.MyTweets = new List<Tweet>() { tweet2, tweet3 };
            user2.FavoritedTweets = new List<Tweet>() { tweet1, tweet4 };
            user2.FollowingUsers = new List<User>() { user3 };
            user2.FollowedBy = new List<User>() { user1, user3 };
            user2.Comments = new List<Comment>() { comment2, comment5 };

            user3.MyTweets = new List<Tweet>() { tweet4 };
            user3.FavoritedTweets = new List<Tweet>() { tweet1, tweet2, tweet3 };
            user3.FollowingUsers = new List<User>() { user1, user2 };
            user3.FollowedBy = new List<User>() { user2 };
            user3.Comments = new List<Comment>() { comment4 };

            tweet1.UsersThatFavorited = new List<User>() { user2, user3 };
            tweet1.Hashtags = new List<Hashtag>() { hashtag1, hashtag2 };
            tweet1.Comments = new List<Comment>() { comment1 };

            tweet2.UsersThatFavorited = new List<User>() { user3 };
            tweet2.Hashtags = new List<Hashtag>() { hashtag1 };
            tweet2.Comments = new List<Comment>() { comment2 };

            tweet3.UsersThatFavorited = new List<User>() { user1, user3 };
            tweet3.Hashtags = new List<Hashtag>() { hashtag3 };
            tweet3.Comments = new List<Comment>() { comment3, comment4 };

            tweet4.UsersThatFavorited = new List<User>() { user2 };
            tweet4.Hashtags = new List<Hashtag>() { hashtag3 };
            tweet4.Comments = new List<Comment>() { comment5 };

            context.Comments.AddOrUpdate(comment1);
            context.Comments.AddOrUpdate(comment2);
            context.Comments.AddOrUpdate(comment3);
            context.Comments.AddOrUpdate(comment4);
            context.Comments.AddOrUpdate(comment5);

            context.SaveChanges();

            context.Hashtags.AddOrUpdate(hashtag1);
            context.Hashtags.AddOrUpdate(hashtag2);
            context.Hashtags.AddOrUpdate(hashtag3);

            context.SaveChanges();

            context.Tweets.AddOrUpdate(tweet1);
            context.Tweets.AddOrUpdate(tweet2);
            context.Tweets.AddOrUpdate(tweet3);
            context.Tweets.AddOrUpdate(tweet4);

            context.SaveChanges();

            context.Users.AddOrUpdate(user1);
            context.Users.AddOrUpdate(user2);
            context.Users.AddOrUpdate(user3);

            context.SaveChanges();
        }
    }
}