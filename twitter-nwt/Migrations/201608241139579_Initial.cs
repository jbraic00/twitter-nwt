namespace twitter_nwt.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Comment",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Text = c.String(),
                        Tweet_ID = c.Int(),
                        User_ID = c.Int(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Tweet", t => t.Tweet_ID)
                .ForeignKey("dbo.User", t => t.User_ID)
                .Index(t => t.Tweet_ID)
                .Index(t => t.User_ID);
            
            CreateTable(
                "dbo.Tweet",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Text = c.String(maxLength: 140),
                        TimeWhenTweeted = c.DateTime(nullable: false),
                        User_ID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.User", t => t.User_ID)
                .Index(t => t.User_ID);
            
            CreateTable(
                "dbo.Hashtag",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Text = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.User",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Username = c.String(nullable: false),
                        Password = c.String(nullable: false),
                        Name = c.String(),
                        Lastname = c.String(),
                        Email = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.HashtagTweets",
                c => new
                    {
                        HashtagID = c.Int(nullable: false),
                        TweetID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.HashtagID, t.TweetID })
                .ForeignKey("dbo.Hashtag", t => t.HashtagID, cascadeDelete: true)
                .ForeignKey("dbo.Tweet", t => t.TweetID, cascadeDelete: true)
                .Index(t => t.HashtagID)
                .Index(t => t.TweetID);
            
            CreateTable(
                "dbo.UserFollowsUser",
                c => new
                    {
                        FollowedByID = c.Int(nullable: false),
                        FollowingID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.FollowedByID, t.FollowingID })
                .ForeignKey("dbo.User", t => t.FollowedByID)
                .ForeignKey("dbo.User", t => t.FollowingID)
                .Index(t => t.FollowedByID)
                .Index(t => t.FollowingID);
            
            CreateTable(
                "dbo.TweetsFavouritedByUsers",
                c => new
                    {
                        TweetID = c.Int(nullable: false),
                        UserID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.TweetID, t.UserID })
                .ForeignKey("dbo.Tweet", t => t.TweetID, cascadeDelete: true)
                .ForeignKey("dbo.User", t => t.UserID, cascadeDelete: true)
                .Index(t => t.TweetID)
                .Index(t => t.UserID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.TweetsFavouritedByUsers", "UserID", "dbo.User");
            DropForeignKey("dbo.TweetsFavouritedByUsers", "TweetID", "dbo.Tweet");
            DropForeignKey("dbo.Tweet", "User_ID", "dbo.User");
            DropForeignKey("dbo.UserFollowsUser", "FollowingID", "dbo.User");
            DropForeignKey("dbo.UserFollowsUser", "FollowedByID", "dbo.User");
            DropForeignKey("dbo.Comment", "User_ID", "dbo.User");
            DropForeignKey("dbo.HashtagTweets", "TweetID", "dbo.Tweet");
            DropForeignKey("dbo.HashtagTweets", "HashtagID", "dbo.Hashtag");
            DropForeignKey("dbo.Comment", "Tweet_ID", "dbo.Tweet");
            DropIndex("dbo.TweetsFavouritedByUsers", new[] { "UserID" });
            DropIndex("dbo.TweetsFavouritedByUsers", new[] { "TweetID" });
            DropIndex("dbo.UserFollowsUser", new[] { "FollowingID" });
            DropIndex("dbo.UserFollowsUser", new[] { "FollowedByID" });
            DropIndex("dbo.HashtagTweets", new[] { "TweetID" });
            DropIndex("dbo.HashtagTweets", new[] { "HashtagID" });
            DropIndex("dbo.Tweet", new[] { "User_ID" });
            DropIndex("dbo.Comment", new[] { "User_ID" });
            DropIndex("dbo.Comment", new[] { "Tweet_ID" });
            DropTable("dbo.TweetsFavouritedByUsers");
            DropTable("dbo.UserFollowsUser");
            DropTable("dbo.HashtagTweets");
            DropTable("dbo.User");
            DropTable("dbo.Hashtag");
            DropTable("dbo.Tweet");
            DropTable("dbo.Comment");
        }
    }
}
