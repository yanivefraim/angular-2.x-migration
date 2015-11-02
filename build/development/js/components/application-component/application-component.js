/// <reference path="../../../tools/typings/tsd.d.ts" />
function applicationComponent() {
    'use strict';
    return {
        restrict: 'E',
        scope: {},
        controller: ApplicationComponent,
        controllerAs: 'applicationComponent',
        bindToController: true,
        template: "<div>Angular 2 Team:\n        <ul>\n            <li ng-repeat=\"item in applicationComponent.items\">\n                <ng2-names-component [data]=item></ng2-names-component>\n            </li>\n        </div>"
    };
}
exports.applicationComponent = applicationComponent;
var ApplicationComponent = (function () {
    function ApplicationComponent() {
        this.items = [{ firstName: 'Victor', lastName: 'Savkin' }, { firstName: 'Tobias', lastName: 'Bosch' }];
    }
    return ApplicationComponent;
})();
exports.ApplicationComponent = ApplicationComponent;

//# sourceMappingURL=../../maps/components/application-component/application-component.js.map