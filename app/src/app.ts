/// <reference path="../../tools/typings/tsd.d.ts" />
import * as angular from 'angular';
import 'angular-ui-router';
import {routes} from './layout/routes';
import './about/index';
import 'zone.js';
import 'reflect-metadata';
import {Comp} from './components/component';
import {adapter} from './adapter';

var app = angular.module('app', ['ui.router', 'about']);
app.config(routes);
// need to add custom exception handler in order for sourcemaps back to typescript to work
app.config(['$provide', function($provide: ng.IModule) {
    $provide.decorator('$exceptionHandler', ['$delegate', function ($delegate: any) {
        return function (exception: Error, cause: string) {
            setTimeout(function () {
                throw exception;
            });
            $delegate(exception, cause);
        };
    }]);
}]);

app
  .directive('comp', adapter.downgradeNg2Component(Comp));

adapter.bootstrap(document.body, ['app']);


export {app};
