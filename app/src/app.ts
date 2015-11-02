/// <reference path="../../tools/typings/tsd.d.ts" />
import * as angular from 'angular';
import 'zone.js';
import 'reflect-metadata';
import {NamesComponent} from './components/names-component';
import {applicationModule} from './components/application-component/application-component-module';
import {adapter} from './adapter';

var app = angular.module('app', [applicationModule.name]);

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
  .directive('ng2NamesComponent', adapter.downgradeNg2Component(NamesComponent));

adapter.bootstrap(document.body, ['app']);


export {app};
