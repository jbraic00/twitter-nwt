namespace twitter_nwt.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Minor : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Comment", new[] { "Tweet_ID" });
            DropIndex("dbo.Comment", new[] { "User_ID" });
            DropIndex("dbo.Tweet", new[] { "User_ID" });
            CreateIndex("dbo.Comment", "Tweet_Id");
            CreateIndex("dbo.Comment", "User_Id");
            CreateIndex("dbo.Tweet", "User_Id");
        }
        
        public override void Down()
        {
            DropIndex("dbo.Tweet", new[] { "User_Id" });
            DropIndex("dbo.Comment", new[] { "User_Id" });
            DropIndex("dbo.Comment", new[] { "Tweet_Id" });
            CreateIndex("dbo.Tweet", "User_ID");
            CreateIndex("dbo.Comment", "User_ID");
            CreateIndex("dbo.Comment", "Tweet_ID");
        }
    }
}
