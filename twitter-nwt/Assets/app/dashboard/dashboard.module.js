"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var dashboard_component_1 = require('./dashboard.component');
var profile_component_1 = require('./../profile/profile.component');
var tweets_list_component_1 = require('./../tweets/tweets-list.component');
var user_registration_component_1 = require('./../user-registration/user-registration.component');
var user_log_in_component_1 = require('./../user-log-in/user-log-in.component');
var others_profile_component_1 = require('./../others-profile/others-profile.component');
var ContainsPipe_1 = require('./../Common/Pipes/ContainsPipe');
var dashboard_routing_1 = require('./dashboard.routing');
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, dashboard_routing_1.dashboardRouting],
            declarations: [dashboard_component_1.DashboardComponent, profile_component_1.ProfileComponent, tweets_list_component_1.TweetsListComponent, user_registration_component_1.UserRegistrationComponent, user_log_in_component_1.UserLogInComponent, others_profile_component_1.OthersProfileComponent, ContainsPipe_1.ContainsPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map