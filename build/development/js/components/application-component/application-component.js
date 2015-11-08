function applicationComponent() {
    'use strict';
    return {
        restrict: 'E',
        scope: {},
        controller: ApplicationComponent,
        controllerAs: 'applicationComponent',
        bindToController: true,
        template: "<div>Angular 2 Contributors:\n        <ul>\n            <li ng-repeat=\"item in applicationComponent.items\">\n                <ng2-names-component [data]=item></ng2-names-component>\n            </li>\n        </div>"
    };
}
exports.default = applicationComponent;
;
var ApplicationComponent = (function () {
    /* @ngInject */
    function ApplicationComponent(dataService) {
        var _this = this;
        this.items = [];
        dataService.getItems().then(function (response) {
            _this.items = response.data.slice(0, 10);
        });
    }
    return ApplicationComponent;
})();

//# sourceMappingURL=../../maps/components/application-component/application-component.js.map