'use strict';

angular.module('phonecatApp')
  .directive('phonecatComponent', phonecatComponent);

function phonecatComponent() {
  return {
    scope: {},
    bindToController: {
      phones: "="
    },
    link: function(scope, elm, attrs, ctrl) {
      ctrl.filterData = {
        text: '',
        orderBy: 'name'
      }; //default search filter
      ctrl.search = function(searchData) {
        ctrl.filterData = searchData;
        scope.$apply();
      }
    },
    controller: function() {},
    controllerAs: 'vm',
    templateUrl: 'partials/phonecatComponent.tpl.html'
  };
}