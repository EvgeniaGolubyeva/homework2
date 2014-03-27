// Implement HomeController here. It should manage Home page.

/// <reference path="../refs.ts" />

class HomeController {
    static $inject = ['$scope', 'ProductService'];

    constructor ($scope, ProductService) {
        ProductService.getFeaturedProducts().then (function (data) {
            $scope.featuredProducts =  <Array<Product>> data.items;
        });
    }
}

angular.module('auction').controller('HomeController', HomeController);