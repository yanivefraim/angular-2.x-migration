var angular = require('angular');
var routes_1 = require('./routes');
var about_component_1 = require('./about-component');
var aboutModule = angular.module('about', ['ui.router']);
exports.aboutModule = aboutModule;
aboutModule
    .config(routes_1.routes)
    .directive('aboutComponent', about_component_1.aboutComponent);

//# sourceMappingURL=../maps/about/index.js.map