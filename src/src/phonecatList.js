'use strict';

angular.module('phonecatApp')
  .directive('phonecatList', phonecatList);

function phonecatList() {
  return {
    scope: {},
    bindToController: {
      phones: "=",
      filterData: "="
    },
    controller: function() {},
    controllerAs: 'vm',
    templateUrl: 'partials/phonecatList.tpl.html'
  };
}