using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(twitter_nwt.Startup))]

namespace twitter_nwt
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
