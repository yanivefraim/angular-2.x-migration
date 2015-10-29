/// <reference path="../../../tools/typings/tsd.d.ts" />
function aboutComponent() {
    'use strict';
    return {
        restrict: 'E',
        scope: {},
        controller: About,
        controllerAs: 'about',
        bindToController: true,
        templateUrl: 'src/about/about.html'
    };
}
exports.aboutComponent = aboutComponent;
var About = (function () {
    function About() {
        console.log('I am the about component! I know what I am about!');
    }
    About.prototype.testMethod = function () {
        console.log('who clicked me!');
    };
    About.prototype.addUp = function (a, b) {
        return a + b;
    };
    return About;
})();
exports.About = About;

//# sourceMappingURL=../maps/about/about-component.js.map