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
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var users = [
    {
        id: 1,
        name: 'Chris',
        username: 'sevilayha',
        avatar: 'https://pbs.twimg.com/profile_images/422816823302561793/Hg3LD8K7_400x400.jpeg'
    },
    {
        id: 2,
        name: 'Nick',
        username: 'whatnicktweets',
        avatar: 'https://pbs.twimg.com/profile_images/502500686588690432/wXBzuCBj_400x400.jpeg'
    },
    {
        id: 3,
        name: 'Holly',
        username: 'hollylawly',
        avatar: 'https://pbs.twimg.com/profile_images/721918869821005824/2qT_RY5M_400x400.jpg'
    }
];
var AboutComponent = (function () {
    function AboutComponent() {
        this.users = users;
    }
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about-page',
            styles: ["\n    .profile-card   {\n      background: #f3f3f3;\n      border-radius: 4px;\n      padding: 30px;\n      text-align: center;\n    }\n    .profile-card img  {\n      max-width: 50%;\n      margin: 15px auto;\n    }\n  "],
            template: "\n    <div class=\"row\" *ngIf=\"users\">\n  \n      <div class=\"col-sm-4\" *ngFor=\"let user of users\">\n        <div class=\"profile-card\">\n          <img [src]=\"user.avatar\" class=\"img-responsive img-circle\">\n\n          <h2>{{ user.name }}</h2>\n          <p><a href=\"#\">{{ user.username }}</a></p>\n        </div>\n      </div>\n\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map