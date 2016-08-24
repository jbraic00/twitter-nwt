using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using twitter_nwt.DAL;
using twitter_nwt.Models;

namespace twitter_nwt.Repositories
{
    public class HashtagRepository
    {
        public IList<Hashtag> GetAllHashtags()
        {
            using (var context = new TwitterContext())
            {
                try
                {
                    var hashtags = context.Hashtags.ToList();
                    if (hashtags.Count == 0)
                    {
                        throw new NullReferenceException("Error when getting all hashtags!");
                    }
                    return hashtags;

                }
                catch (Exception e)
                {
                    throw new Exception("All hashtags' list is null. Exception: " + e.Message);
                }
            }

        }
    }
}