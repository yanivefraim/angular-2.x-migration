import DataService from '../../services/data-service';

export default function applicationComponent () {
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
};

class ApplicationComponent {
    items: any[] = [];
    /* @ngInject */
    constructor(dataService: DataService) {
        dataService.getItems().then((response: any) => {
            this.items = response.data.slice(0, 10);
        });
    }
}
