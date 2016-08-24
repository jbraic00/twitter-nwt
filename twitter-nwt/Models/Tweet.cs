using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace twitter_nwt.Models
{
    public class Tweet
    {
        public int ID { get; set; }

        [StringLength(140)]
        public string Text { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime TimeWhenTweeted { get; set; }

        [JsonIgnore]
        public virtual User User { get; set; }

        [InverseProperty("FavoritedTweets")]
        [JsonIgnore]
        public virtual ICollection<User> UsersThatFavorited { get; set; }

        [InverseProperty("Tweets")]
        [JsonIgnore]
        public virtual ICollection<Hashtag> Hashtags { get; set; }

        [JsonIgnore]
        public virtual ICollection<Comment> Comments { get; set; }
    }
}