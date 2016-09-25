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
var user_service_1 = require('../shared/services/user.service');
var AboutComponent = (function () {
    function AboutComponent(service) {
        this.service = service;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUsers().then(function (users) { return _this.users = users; });
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about-page',
            styles: ["\n    .profile-card   {\n      background: #f3f3f3;\n      border-radius: 4px;\n      padding: 30px;\n      text-align: center;\n    }\n    .profile-card img  {\n      max-width: 50%;\n      margin: 15px auto;\n    }\n  "],
            template: "\n    <div class=\"row\" *ngIf=\"users\">\n  \n      <div class=\"col-sm-4\" *ngFor=\"let user of users\">\n\n        <div class=\"profile-card\" [routerLink]=\"['/about', user.username]\">\n          <img [src]=\"user.avatar\" class=\"img-responsive img-circle\">\n\n          <h2>{{ user.name }}</h2>\n          \n          <p><a href=\"https://twitter.com/{{ user.username }}\">\n            {{ user.username }}\n          </a></p>\n        </div>\n\n      </div>\n\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map