System.register([], function (_export) {
  var _createClass, _classCallCheck;

  function phonecatComponent() {
    return {
      scope: {},
      bindToController: {
        phones: "="
      },
      link: function link() {},
      controller: function controller($scope) {
        var that = this;
        that.filterData = {
          text: "",
          orderBy: "name"
        }; //default search filter
        that.search = function (searchData) {
          that.filterData = searchData;
          $scope.$apply();
        };
      },
      controllerAs: "vm",
      templateUrl: "partials/phonecatComponent.tpl.html"
    };

    var PhonecatComponent = (function () {
      function PhonecatComponent() {
        _classCallCheck(this, PhonecatComponent);
      }

      _createClass(PhonecatComponent, {
        search: {
          value: function search(searchData) {
            this.filterData = searchData;
            $scope.$apply();
          }
        }
      });

      return PhonecatComponent;
    })();
  }
  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      angular.module("phonecatApp").directive("phonecatComponent", phonecatComponent);
    }
  };
});