using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using twitter_nwt.Repositories;

namespace twitter_nwt.Controllers.API
{
    [RoutePrefix("api/tweets")]
    public class TweetsController : ApiController
    {
        private readonly TweetRepository _tweetRepository;

        public TweetsController()
        {
            _tweetRepository = new TweetRepository();
        }

        [Route("")]
        [HttpGet]
        public IHttpActionResult GetAllTweets()
        {
            try
            {
                var tweets = _tweetRepository.GetAllTweets();
                return Ok(tweets);
            }
            catch (Exception e)
            {
                return BadRequest("Error has occured. Exception: " + e.Message);
            }
        }

        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);
        }
    }
}
