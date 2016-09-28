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
var user_service_1 = require('../../shared/services/user.service');
var DashboardUsersComponent = (function () {
    function DashboardUsersComponent(service) {
        this.service = service;
    }
    DashboardUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUsers().then(function (users) { return _this.users = users; });
    };
    DashboardUsersComponent = __decorate([
        core_1.Component({
            template: "\n    <h2>Users Section</h2>\n    <p>Manage your users.</p>\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-4\">\n\n        <div *ngIf=\"users\" class=\"list-group\">\n          <a *ngFor=\"let user of users\" \n            class=\"list-group-item\"\n            [routerLink]=\"['/dashboard/users', user.username]\">\n              {{ user.name }}\n          </a>\n        </div>\n        \n      </div>\n      <div class=\"col-sm-8\">\n\n        <router-outlet></router-outlet>\n\n      </div>\n\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], DashboardUsersComponent);
    return DashboardUsersComponent;
}());
exports.DashboardUsersComponent = DashboardUsersComponent;
//# sourceMappingURL=dashboard-users.component.js.map