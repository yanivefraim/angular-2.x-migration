/// <reference path="../../tools/typings/tsd.d.ts" />
var angular = require('angular');
require('angular-ui-router');
var routes_1 = require('./layout/routes');
require('./about/index');
require('zone.js');
require('reflect-metadata');
var component_1 = require('./components/component');
var adapter_1 = require('./adapter');
var app = angular.module('app', ['ui.router', 'about']);
exports.app = app;
app.config(routes_1.routes);
// need to add custom exception handler in order for sourcemaps back to typescript to work
app.config(['$provide', function ($provide) {
        $provide.decorator('$exceptionHandler', ['$delegate', function ($delegate) {
                return function (exception, cause) {
                    setTimeout(function () {
                        throw exception;
                    });
                    $delegate(exception, cause);
                };
            }]);
    }]);
app
    .directive('comp', adapter_1.adapter.downgradeNg2Component(component_1.Comp));
adapter_1.adapter.bootstrap(document.body, ['app']);

//# sourceMappingURL=maps/app.js.map