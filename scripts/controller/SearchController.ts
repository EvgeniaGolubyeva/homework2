// Implement SearchController here. It should manage Search Results page.

/// <reference path="../refs.ts" />

class SearchController {
    static $inject = ['$scope', 'ProductService'];

    constructor ($scope, ProductService) {
        ProductService.getSearchProducts().then (function (data) {
            $scope.searchProducts = <Array<Product>> data.items;
        });
    }
}

angular.module('auction').controller('SearchController', SearchController);
