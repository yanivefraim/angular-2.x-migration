var angular_1 = require('angular');
var Application = (function () {
    /* @ngInject */
    function Application() {
        //
    }
    return Application;
})();
exports.default = angular_1.default.module('app')
    .directive('applicationComponent', function () {
    return {
        template: "<div>123</div>",
        controller: Application,
        controllerAs: 'application',
        bindToController: true,
        scope: {},
        restrict: 'E'
    };
});

//# sourceMappingURL=../maps/components/application-component.js.map