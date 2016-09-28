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
var forms_1 = require('@angular/forms');
var dashboard_component_1 = require('./dashboard.component');
var dashboard_routing_1 = require('./dashboard.routing');
var dashboard_users_component_1 = require('./users/dashboard-users.component');
var dashboard_users_home_component_1 = require('./users/dashboard-users-home.component');
var dashboard_user_details_component_1 = require('./users/dashboard-user-details.component');
var user_service_1 = require('../shared/services/user.service');
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                dashboard_routing_1.dashboardRouting
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                dashboard_users_component_1.DashboardUsersComponent,
                dashboard_users_home_component_1.DashboardUsersHomeComponent,
                dashboard_user_details_component_1.DashboardUserDetailsComponent
            ],
            providers: [
                user_service_1.UserService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map