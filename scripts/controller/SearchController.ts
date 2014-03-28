// Implement SearchController here. It should manage Search Results page.

/// <reference path="../refs.ts" />

class SearchController {
    static $inject = ['$scope', 'searchProducts'];

    constructor ($scope, searchProducts: Array<Product>) {
        $scope.searchProducts = searchProducts;
    }

    public static resolve = {
        searchProducts: ['ProductService', function(productService) {
            return productService.getSearchProducts().then (function (data) {
                return <Array<Product>> data.items;
            });
        }]
    }
}

angular.module('auction').controller('SearchController', SearchController);
