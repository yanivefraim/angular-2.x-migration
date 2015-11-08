var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var core_1 = require('angular2/core');
var data_service_1 = require('../../services/data-service');
var NamesComponent = (function () {
    function NamesComponent(dataService) {
        this._dataService = dataService;
    }
    NamesComponent.prototype.onInit = function () {
        var _this = this;
        this._dataService.getUserNames(this.data.login).then(function (response) {
            console.log(response.data);
            _this.userData = response.data;
        });
    };
    __decorate([
        angular2_1.Input()
    ], NamesComponent.prototype, "data");
    NamesComponent = __decorate([
        angular2_1.Component({
            selector: 'app-cmp'
        }),
        angular2_1.View({
            template: "<div style=\"margin: 20px 0\"><span>{{data.login}}</span> | <span> {{userData.name}}</span> <span><img style=\"height:100px;width:100px;vertical-align:middle;margin: 0 20px;\" src=\"{{userData.avatar_url}}\"><span></div>"
        }),
        __param(0, core_1.Inject(data_service_1.default))
    ], NamesComponent);
    return NamesComponent;
})();
exports.default = NamesComponent;

//# sourceMappingURL=../../maps/components/names-component/names-component.js.map