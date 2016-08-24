using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using twitter_nwt.Repositories;

namespace twitter_nwt.Controllers.API
{
    [RoutePrefix("api/users")]
    public class UsersController : ApiController
    {
        private readonly UserRepository _userRepository;

        public UsersController()
        {
            _userRepository = new UserRepository();
        }

        [Route("")]
        [HttpGet]
        public IHttpActionResult GetAllUsers()
        {
            try
            {
                var users = _userRepository.GetAllUsers();
                return Ok(users);
            }
            catch (Exception e)
            {
                return BadRequest("Error has occured. Exception: " + e.Message);
            }
        }
    }
}
