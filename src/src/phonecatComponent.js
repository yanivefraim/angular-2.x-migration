'use strict';

angular.module('phonecatApp')
  .directive('phonecatComponent', phonecatComponent);

function phonecatComponent() {
  return {
    scope: {},
    bindToController: {
      phones: "="
    },
    link: function() {
      
    },
    controller: function($scope) {
      var that = this;
      that.filterData = {
        text: '',
        orderBy: 'name'
      }; //default search filter
      that.search = function(searchData) {
        that.filterData = searchData;
        $scope.$apply();
      }
    },
    controllerAs: 'vm',
    templateUrl: 'partials/phonecatComponent.tpl.html'
  };
  class PhonecatComponent {
    constructor() {
      
    }
    search(searchData) {
      this.filterData = searchData;
      $scope.$apply();
    }
  }
}