using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using twitter_nwt.Models.DTO;
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

        [Route("update")]
        [HttpPut]
        public IHttpActionResult UpdateUser(UpdateUserDTO updatedUser)
        {
            try
            {
                var user = _userRepository.UpdateUser(updatedUser);
                return Ok(user);
            }
            catch (Exception e)
            {
                return BadRequest("Error has occured. Exception: " + e.Message);
            }
        }

        [Route("search/{query}")]
        [HttpGet]
        public IHttpActionResult SearchUsers(string query)
        {
            try
            {
                var users = _userRepository.SearchUsers(query);
                return Ok(users);
            }
            catch (Exception e)
            {
                return BadRequest("Error has occured. Exception: " + e.Message);
            }
        }

        [Route("add")]
        [HttpPost]
        public IHttpActionResult AddUser(AddUserDTO newUser)
        {
            try
            {
                var user = _userRepository.AddUser(newUser);
                return Ok(user);
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
