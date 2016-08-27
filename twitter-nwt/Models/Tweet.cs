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
        [Key]
        public int Id { get; set; }

        [StringLength(140)]
        public string Text { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime TimeWhenTweeted { get; set; }

        [JsonIgnore]
        public User User { get; set; }

        [InverseProperty("FavoritedTweets")]
        [JsonIgnore]
        public ICollection<User> UsersThatFavorited { get; set; }

        [InverseProperty("Tweets")]
        [JsonIgnore]
        public ICollection<Hashtag> Hashtags { get; set; }

        [JsonIgnore]
        public ICollection<Comment> Comments { get; set; }
    }
}