using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using twitter_nwt.DAL;
using twitter_nwt.Models;

namespace twitter_nwt.Repositories
{
    public class UserRepository
    {
        public IList<User> GetAllUsers()
        {
            using (var context = new TwitterContext())
            {
                try
                {
                    var users = context.Users.ToList();
                    if (users.Count == 0)
                    {
                        throw new NullReferenceException("Error when getting all users!");
                    }
                    return users;
                }
                catch (Exception e)
                {
                    throw new Exception("All users' list is null. Exception: " + e.Message);
                }
            }
        }
    }
}