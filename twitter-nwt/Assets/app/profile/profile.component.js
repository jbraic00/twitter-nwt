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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var UserService_1 = require('./../Common/Services/UserService');
var ProfileComponent = (function () {
    function ProfileComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () { this.getUser(); };
    ProfileComponent.prototype.getUser = function () {
        this.user = this.userService.currentUser;
        console.log("In component: ", this.user);
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.updatedUser = {
            id: this.user.id,
            username: this.user.username,
            password: this.user.password,
            name: this.user.name,
            lastname: this.user.lastname,
            email: this.user.email
        };
        this.userService.updateUser(this.updatedUser)
            .subscribe(function (user) { _this.user = user; console.log("Updated user data: ", _this.user); }, function (error) { return _this.errorMessage = error; });
    };
    ProfileComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['/dashboard']);
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-profile',
            templateUrl: 'profile.template.html',
            directives: [common_1.FORM_DIRECTIVES],
            styleUrls: ['./../../../../Content/forms.css']
        }), 
        __metadata('design:paramtypes', [UserService_1.UserService, router_1.Router])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map