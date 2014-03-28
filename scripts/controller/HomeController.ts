// Implement HomeController here. It should manage Home page.

/// <reference path="../refs.ts" />

class HomeController {
    static $inject = ['$scope', 'featuredProducts'];

    constructor ($scope, featuredProducts: Array<Product>) {
        $scope.featuredProducts = featuredProducts;
    }
}

angular.module('auction').controller('HomeController', HomeController);