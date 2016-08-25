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
var UserService_1 = require('./../Common/Services/UserService');
var ProfileComponent = (function () {
    function ProfileComponent(userService) {
        this.userService = userService;
    }
    ProfileComponent.prototype.ngOnInit = function () { this.getUsers(); };
    ProfileComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { _this.users = users; console.log("Users: ", _this.users); console.log("First user's username: ", _this.users[0].username); }, function (error) { return _this.errorMessage = error; });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'my-profile',
            template: '<h3>My profile</h3>',
            providers: [UserService_1.UserService]
        }), 
        __metadata('design:paramtypes', [UserService_1.UserService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map