using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using twitter_nwt.DAL;
using twitter_nwt.Models;
using twitter_nwt.Models.DTO;

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

        public User UpdateUser(UpdateUserDTO updatedUser)
        {
            using (var context = new TwitterContext())
            {
                try
                {
                    var user = context.Users
                        .Include("MyTweets")
                        .Include("FavoritedTweets")
                        .Include("FollowingUsers")
                        .Include("FollowedBy")
                        .Include("Comments")
                        .FirstOrDefault(x => x.Id == updatedUser.Id);
                    if (user == null)
                    {
                        throw new NullReferenceException("Error when getting the required user!");
                    }

                    user.Username = updatedUser.Username;
                    user.Password = updatedUser.Password;
                    user.Name = updatedUser.Name;
                    user.Lastname = updatedUser.Lastname;
                    user.Email = updatedUser.Email;

                    context.SaveChanges();
                    return user;
                }
                catch (Exception e)
                {
                    throw new Exception("Required user not found. Exception: " + e.Message);
                }
            }
        }
    }
}