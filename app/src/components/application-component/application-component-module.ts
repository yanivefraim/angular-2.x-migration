import * as angular from 'angular';
import {applicationComponent} from './application-component';


var applicationModule: ng.IModule = angular.module('applicationComponent', []);

applicationModule
  .directive('applicationComponent', applicationComponent);
export {applicationModule};
