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
var UserLogInComponent = (function () {
    function UserLogInComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.isUsernameInvalid = false;
        this.isPasswordInvalid = false;
    }
    UserLogInComponent.prototype.logIn = function () {
        if (!this.userService.checkIfUsernameExists(this.username)) {
            this.isUsernameInvalid = true;
        }
        else if (!this.userService.checkIfPasswordExists(this.password)) {
            this.isUsernameInvalid = false;
            this.isPasswordInvalid = true;
        }
        else {
            this.isPasswordInvalid = false;
            this.userService.saveCurrentUser(this.username);
            this.router.navigate(['/dashboard/tweets-list']);
        }
    };
    UserLogInComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-log-in-form',
            templateUrl: 'user-log-in.template.html',
            directives: [common_1.FORM_DIRECTIVES],
            styleUrls: ['./../../../../Content/forms.css', './../../../../Content/general-page.css']
        }), 
        __metadata('design:paramtypes', [UserService_1.UserService, router_1.Router])
    ], UserLogInComponent);
    return UserLogInComponent;
}());
exports.UserLogInComponent = UserLogInComponent;
//# sourceMappingURL=user-log-in.component.js.map