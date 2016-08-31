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
        [Key]
        public int Id { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        public string Name { get; set; }

        public string Lastname { get; set; }

        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [InverseProperty("User")]
        //[JsonIgnore]
        public ICollection<Tweet> MyTweets { get; set; }

        [InverseProperty("UsersThatFavorited")]
        [JsonIgnore]
        public ICollection<Tweet> FavoritedTweets { get; set; }

        [JsonIgnore]
        public ICollection<User> FollowingUsers { get; set; }

        //[JsonIgnore]
        public ICollection<User> FollowedBy { get; set; }

        [JsonIgnore]
        public ICollection<Comment> Comments { get; set; }
    }
}