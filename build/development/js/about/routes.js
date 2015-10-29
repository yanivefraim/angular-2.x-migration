/// <reference path="../../../tools/typings/tsd.d.ts" />
routes.$inject = ['$stateProvider'];
function routes($stateProvider) {
    'use strict';
    $stateProvider
        .state('main.about', {
        url: 'about',
        views: {
            'content@main': {
                template: '<about-component></about-component>'
            }
        }
    });
}
exports.routes = routes;

//# sourceMappingURL=../maps/about/routes.js.map