using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using twitter_nwt.Repositories;

namespace twitter_nwt.Controllers.API
{
    [RoutePrefix("api/hashtags")]
    public class HashtagsController : ApiController
    {
        private readonly HashtagRepository _hashtagRepository;

        public HashtagsController()
        {
            _hashtagRepository = new HashtagRepository();
        }

        [Route("")]
        [HttpGet]
        public IHttpActionResult GetAllHashtags()
        {
            try
            {
                var hashtags = _hashtagRepository.GetAllHashtags();
                return Ok(hashtags);
            }
            catch (Exception e)
            {
                return BadRequest("Error has occured. Exception: " + e.Message);
            }
        }
    }
}
