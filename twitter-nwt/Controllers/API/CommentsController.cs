using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using twitter_nwt.Repositories;

namespace twitter_nwt.Controllers.API
{
    [RoutePrefix("api/comments")]
    public class CommentsController : ApiController
    {
        private readonly CommentRepository _commentRepository;

        public CommentsController()
        {
            _commentRepository = new CommentRepository();
        }

        [Route("")]
        [HttpGet]
        public IHttpActionResult GetAllComments()
        {
            try
            {
                var comments = _commentRepository.GetAllComments();
                return Ok(comments);

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
