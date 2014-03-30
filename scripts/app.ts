// Use this file to *create* an AngularJS module for your app and configure $routeProvider.

/// <reference path="refs.ts" />

'use strict'

//create a module for an application
var auctionApplication = angular.module('auction', ['ngRoute']);


//config routerProvider
auctionApplication.config(['$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
    $routeProvider
        .when ('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            resolve: HomeController.resolve
        })
        .when('/search', {
            templateUrl: 'views/search.html',
            controller: 'SearchController',
            resolve: SearchController.resolve
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

//initialize jquery-ui slider
//have no idea how it works or where in should be placed in file structure, guess it will be explained in Unit 3
//http://stackoverflow.com/questions/16899747/jquery-plugins-doesnt-work-well-with-angularjs
auctionApplication.directive('slider', () => {
    var directive = {
        restrict: 'A',
        link: (scope, element, attrs) => {
            scope.$watch(attrs.slider, function(value) {
                setTimeout(function() {
                    $(element[0]).slider({
                        values: [10, 90],
                        range: true
                    });
                }, 1);
            });
        }
    };
    return directive;
});