using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace twitter_nwt.Models
{
    public class User
    {
        public int ID { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        public string Name { get; set; }

        public string Lastname { get; set; }

        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<Tweet> MyTweets { get; set; }

        [InverseProperty("UsersThatFavorited")]
        [JsonIgnore]
        public virtual ICollection<Tweet> FavoritedTweets { get; set; }

        [JsonIgnore]
        public virtual ICollection<User> FollowingUsers { get; set; }

        [JsonIgnore]
        public virtual ICollection<User> FollowedBy { get; set; }

        [JsonIgnore]
        public virtual ICollection<Comment> Comments { get; set; }
    }
}