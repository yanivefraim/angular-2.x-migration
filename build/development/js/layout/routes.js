/// <reference path="../../../tools/typings/tsd.d.ts" />
routes.$inject = ['$stateProvider', '$urlRouterProvider'];
function routes($stateProvider, $urlRouterProvider) {
    'use strict';
    $stateProvider
        .state('main', {
        abstract: true,
        url: '/',
        templateUrl: 'src/layout/main.html'
    })
        .state('main.home', {
        url: '',
        views: {
            'content@main': {
                templateUrl: 'src/layout/home.html'
            }
        }
    });
    $urlRouterProvider.otherwise('/');
}
exports.routes = routes;

//# sourceMappingURL=../maps/layout/routes.js.map