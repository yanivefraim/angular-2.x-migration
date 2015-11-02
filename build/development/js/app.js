/// <reference path="../../tools/typings/tsd.d.ts" />
var angular = require('angular');
require('zone.js');
require('reflect-metadata');
var names_component_1 = require('./components/names-component/names-component');
var application_component_module_1 = require('./components/application-component/application-component-module');
var adapter_1 = require('./adapter');
var app = angular.module('app', [application_component_module_1.applicationModule.name]);
exports.app = app;
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
    .directive('ng2NamesComponent', adapter_1.adapter.downgradeNg2Component(names_component_1.NamesComponent));
adapter_1.adapter.bootstrap(document.body, ['app']);

//# sourceMappingURL=maps/app.js.map