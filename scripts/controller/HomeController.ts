// Implement HomeController here. It should manage Home page.

/// <reference path="../refs.ts" />

class HomeController {
    static $inject = ['$scope', 'featuredProducts'];

    constructor ($scope, featuredProducts: Array<Product>) {
        $scope.featuredProducts = featuredProducts;
    }

    public static resolve = {
        featuredProducts: ['ProductService', function(productService) {
            return productService.getFeaturedProducts().then (function (data) {
                return <Array<Product>> data.items;
            });
        }]
    }
}

angular.module('auction').controller('HomeController', HomeController);