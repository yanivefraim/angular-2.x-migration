'use strict';

class PhonecatComponent {
  /* @ngInject */
  constructor($scope, $element) {

  }
}

angular
  .module('phonecatApp')
  .directive('phonecatComponent', () => {
  return {
    templateUrl: 'partials/phonecatComponent.tpl.html',
    controller: PhonecatComponent,
    controllerAs: 'vm',
    bindToController: true,
    restrict: 'EA'
  };
});
