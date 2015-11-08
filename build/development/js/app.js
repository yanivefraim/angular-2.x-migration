var upgrade_1 = require('angular2/upgrade');
var data_service_1 = require('./services/data-service');
var application_component_1 = require('./components/application-component/application-component');
var names_component_1 = require('./components/names-component/names-component');
angular.module('app', []);
angular.module('app').directive('applicationComponent', application_component_1.default);
angular.module('app').service('dataService', data_service_1.default);
//=================== ngUpgrade + bootstrap =============================
var adapter = new upgrade_1.UpgradeAdapter();
angular.module('app').directive('ng2NamesComponent', adapter.downgradeNg2Component(names_component_1.default));
adapter.upgradeNg1Provider('dataService', { asToken: data_service_1.default });
adapter.bootstrap(document.body, ['app']);

//# sourceMappingURL=maps/app.js.map