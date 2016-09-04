using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace twitter_nwt.Models.DTO
{
    public class AddTweetDTO
    {
        public string Text { get; set; }
        public int UserId { get; set; }
        public ICollection<Hashtag> Hashtags { get; set; }

    }

}