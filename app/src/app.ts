import {UpgradeAdapter} from 'angular2/upgrade';
import DataService from './services/data-service';
import applicationComponent from './components/application-component/application-component';
import NamesComponent from './components/names-component/names-component';

angular.module('app', []);

angular.module('app').directive('applicationComponent', applicationComponent);

angular.module('app').service('dataService', DataService);

//=================== ngUpgrade + bootstrap =============================
let adapter = new UpgradeAdapter();

angular.module('app').directive('ng2NamesComponent', adapter.downgradeNg2Component(NamesComponent));

adapter.upgradeNg1Provider('dataService', { asToken: DataService });


adapter.bootstrap(document.body, ['app']);
