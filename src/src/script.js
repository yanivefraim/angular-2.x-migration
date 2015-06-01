// Code goes here

'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', ['$http', '$scope',
  function($http, $scope) {
    var that = this;
    $http.get('phones.json').success(function(data) {
      that.phones = data;
    }).error(function(e){});

    this.orderProp = 'age';
  }
]);