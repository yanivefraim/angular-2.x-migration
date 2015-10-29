/// <reference path="../../../tools/typings/tsd.d.ts" />
var about_component_1 = require('./about-component');
describe('About', function () {
    var about = new about_component_1.About();
    it('Should add up', function () {
        expect(about.addUp(4, 5)).toBe(9);
    });
});

//# sourceMappingURL=../maps/about/about.spec.js.map