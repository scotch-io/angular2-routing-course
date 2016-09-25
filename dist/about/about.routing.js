"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./about.component');
var about_user_component_1 = require('./about-user.component');
var aboutRoutes = [
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'about/:username', component: about_user_component_1.AboutUserComponent },
];
exports.aboutRouting = router_1.RouterModule.forChild(aboutRoutes);
//# sourceMappingURL=about.routing.js.map