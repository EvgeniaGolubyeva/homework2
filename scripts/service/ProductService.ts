// This file should contain ProductService implementation which is responsible for managing products.
// All other parts of the app shouldn't access data/*.json files directly, instead they should use this service.

// Leverage as many TypeScript features (classes, type annotations, lambdas, etc.)
// as you can (and as it seems reasonable to you ;))

/// <reference path="../refs.ts" />

class ProductService {
    static $inject = ['$http', '$q'];

    private FEATURED_PRODUCTS_FILE: string = 'data/featured.json';
    private SEARCH_PRODUCTS_FILE: string = 'data/search.json';

    private getDataFromJSON: Function;

    constructor($http, $q) {
        this.getDataFromJSON = (fileName) => {
            return $http.get(fileName).then(
                function(response) {return response.data},
                function(reason) {$q.reject(reason)}
            )
        };
    }

    getFeaturedProducts() {
        return this.getDataFromJSON(this.FEATURED_PRODUCTS_FILE);
    }

    getSearchProducts() {
        return this.getDataFromJSON(this.SEARCH_PRODUCTS_FILE);
    }
}
angular.module('auction').service('ProductService', ProductService);