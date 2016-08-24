using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using twitter_nwt.DAL;
using twitter_nwt.Models;

namespace twitter_nwt.Repositories
{
    public class CommentRepository
    {
        public IList<Comment> GetAllComments()
        {
            using (var context = new TwitterContext())
            {
                try
                {
                    var comments = context.Comments.ToList();
                    if (comments.Count == 0)
                    {
                        throw new NullReferenceException("Error when getting all comments!");
                    }
                    return comments;
                }
                catch (Exception e)
                {
                    throw new Exception("All comments' list is null. Exception: " + e.Message);
                }
            }
        }
    }
}