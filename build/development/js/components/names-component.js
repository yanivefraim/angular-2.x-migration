var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var NamesComponent = (function () {
    function NamesComponent() {
        //123
    }
    NamesComponent = __decorate([
        angular2_1.Component({
            selector: 'ng2-comp',
            inputs: ['data']
        }),
        angular2_1.View({
            template: "{{data.firstName}} {{data.lastName}}"
        })
    ], NamesComponent);
    return NamesComponent;
})();
exports.NamesComponent = NamesComponent;

//# sourceMappingURL=../maps/components/names-component.js.map