using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace twitter_nwt.Models
{
    public class Comment
    {
        [Key]
        public int Id { get; set; }

        public string Text { get; set; }

        [JsonIgnore]
        public User User { get; set; }

        [JsonIgnore]
        public Tweet Tweet { get; set; }
    }
}