/// <reference path="../../../tools/typings/tsd.d.ts" />
function applicationComponent() {
    'use strict';
    return {
        restrict: 'E',
        scope: {},
        controller: ApplicationComponent,
        controllerAs: 'applicationComponent',
        bindToController: true,
        template: `<div>Angular 2 Contributors:
        <ul>
            <li ng-repeat="item in applicationComponent.items">
                <ng2-names-component [data]=item></ng2-names-component>
            </li>
        </div>`
    };
}

class ApplicationComponent {
    items: [];
    constructor() {
        this.items = [{ firstName: 'Victor', lastName: 'Savkin' }, { firstName: 'Tobias', lastName: 'Bosch' }, { firstName: 'Victor', lastName: 'Berchet' }, { firstName: 'Timothy', lastName: 'Blasi' }];
    }
}

export {applicationComponent, ApplicationComponent};
