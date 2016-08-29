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
var User_1 = require('./../Common/Models/User');
var UserService_1 = require('./../Common/Services/UserService');
var UserRegistrationComponent = (function () {
    function UserRegistrationComponent(userService) {
        this.userService = userService;
        this.newUser = new User_1.User();
    }
    UserRegistrationComponent.prototype.register = function () {
        var _this = this;
        console.log("Registering new user! New user: ", this.newUser);
        this.userService.addUser(this.newUser)
            .subscribe(function (user) { _this.newUser = user; console.log("Updated user data: ", _this.newUser); }, function (error) { return _this.errorMessage = error; });
    };
    UserRegistrationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-registration-form',
            templateUrl: 'user-registration.template.html',
            directives: [common_1.FORM_DIRECTIVES],
            styleUrls: ['./../../../../Content/forms.css']
        }), 
        __metadata('design:paramtypes', [UserService_1.UserService])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());
exports.UserRegistrationComponent = UserRegistrationComponent;
//# sourceMappingURL=user-registration.component.js.map