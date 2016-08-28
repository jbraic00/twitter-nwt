"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var profile_component_1 = require('./../profile/profile.component');
var tweets_list_component_1 = require('./../tweets/tweets-list.component');
var user_registration_component_1 = require('./../user-registration/user-registration.component');
var dashboardRoutes = [
    {
        path: 'dashboard', component: dashboard_component_1.DashboardComponent, children: [
            { path: '', component: tweets_list_component_1.TweetsListComponent },
            { path: 'profile', component: profile_component_1.ProfileComponent },
            { path: 'user-registration', component: user_registration_component_1.UserRegistrationComponent }
        ]
    }
];
exports.dashboardRouting = router_1.RouterModule.forChild(dashboardRoutes);
//# sourceMappingURL=dashboard.routing.js.map