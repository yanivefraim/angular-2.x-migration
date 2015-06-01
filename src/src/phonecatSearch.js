'use strict';

angular.module('phonecatApp')
  .directive('phonecatSearch', phonecatSearch);

function phonecatSearch() {
  return {
    scope: {},
    bindToController: {
      search: "&"
    },
    controller: function() {},
    controllerAs: 'vm',
    link: function(scope, elm, attrs, ctrl) {
      var inputText = elm.find('input')[0];
      var selectedFilter = elm.find('select')[0];

      elm.bind('keyup change', function() {
        var searchData = {
          text: inputText.value,
          orderBy: selectedFilter[selectedFilter.selectedIndex].value
        };
        ctrl.search({
          searchData: searchData
        });
      });
    },
    templateUrl: 'partials/phonecatSearch.tpl.html'
  };
}