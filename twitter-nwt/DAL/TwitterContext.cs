using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;
using twitter_nwt.Models;

namespace twitter_nwt.DAL
{
    public class TwitterContext: DbContext
    {
        public TwitterContext() : base("TwitterContext")
        {
        }

        public DbSet<Tweet> Tweets { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Hashtag> Hashtags { get; set; }
        public DbSet<Comment> Comments { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Entity<Tweet>()
                .HasMany(tweets => tweets.UsersThatFavorited)
                .WithMany(users => users.FavoritedTweets)
                .Map(favouritedTweets => favouritedTweets
                    .MapLeftKey("TweetId")
                    .MapRightKey("UserId")
                    .ToTable("TweetsFavouritedByUsers"));

            modelBuilder.Entity<Tweet>()
                .HasRequired(tweet => tweet.User)
                .WithMany(user => user.MyTweets)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Hashtag>()
                .HasMany(h => h.Tweets)
                .WithMany(t => t.Hashtags)
                .Map(hashtagTweets => hashtagTweets
                    .MapLeftKey("HashtagId")
                    .MapRightKey("TweetId")
                    .ToTable("HashtagTweets"));

            modelBuilder.Entity<User>()
                .HasMany(user => user.FollowingUsers)
                .WithMany(followedUsers => followedUsers.FollowedBy)
                .Map(userFollowers => userFollowers
                    .MapLeftKey("FollowedById")
                    .MapRightKey("FollowingId")
                    .ToTable("UserFollowsUser"));
        }
    }
}