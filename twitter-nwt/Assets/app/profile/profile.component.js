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
var UserService_1 = require('./../Common/Services/UserService');
var ProfileComponent = (function () {
    function ProfileComponent(userService) {
        this.userService = userService;
        this.editing = false;
    }
    ProfileComponent.prototype.ngOnInit = function () { this.getUsers(); };
    ProfileComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { _this.users = users; console.log("Users: ", _this.users); console.log("First user's username: ", _this.users[0].username); _this.firstUser = _this.users[0]; }, function (error) { return _this.errorMessage = error; });
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.editing = false;
        this.updatedUser = {
            id: this.firstUser.id,
            username: this.firstUser.username,
            password: this.firstUser.password,
            name: this.firstUser.name,
            lastname: this.firstUser.lastname,
            email: this.firstUser.email
        };
        this.userService.updateUser(this.updatedUser)
            .subscribe(function (user) { _this.firstUser = user; console.log("Updated user data: ", _this.firstUser); }, function (error) { return _this.errorMessage = error; });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-profile',
            templateUrl: 'profile.template.html',
            providers: [UserService_1.UserService],
            directives: [common_1.FORM_DIRECTIVES],
            styleUrls: ['./../../../../Content/forms.css']
        }), 
        __metadata('design:paramtypes', [UserService_1.UserService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map