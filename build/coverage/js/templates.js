var angular = require('angular');'use strict'; module.exports = angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/src/about/about.html","<div class=\"jumbotron\">\n<h1>What is this all about!</h1>\n\n    <p>The about page uses a simple ES6 class and a directive with ControllerAs syntax to try and model a simple Angular 2 component setup.</p>\n<div ng-click=\"about.testMethod()\">Click me Please - but not too hard! (check console log for links back to source files!)</div>\n</div>\n");
$templateCache.put("/src/layout/home.html","<div class=\"jumbotron\">\n    <h1>Welcome to this simple and yet awfully exciting SPA!</h1>\n    <comp></comp>\n</div>\n\n");
$templateCache.put("/src/layout/main.html","<div class=\"container\">\n    <header>\n        <a ui-sref=\"main.home\">Home</a> - <a ui-sref=\"main.about\">About</a>\n    </header>\n\n    <section class=\"main\">\n        <div ui-view=\"content\"></div>\n    </section>\n\n    <footer>\n        This is a footer\n    </footer>\n</div>\n");}]);