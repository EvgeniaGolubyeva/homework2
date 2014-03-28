// Implement SearchController here. It should manage Search Results page.

/// <reference path="../refs.ts" />

class SearchController {
    static $inject = ['$scope', 'searchProducts'];

    constructor ($scope, searchProducts: Array<Product>) {
        $scope.searchProducts = searchProducts;
    }
}

angular.module('auction').controller('SearchController', SearchController);
