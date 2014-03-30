// This file should contain ProductService implementation which is responsible for managing products.
// All other parts of the app shouldn't access data/*.json files directly, instead they should use this service.
// Leverage as many TypeScript features (classes, type annotations, lambdas, etc.)
// as you can (and as it seems reasonable to you ;))
/// <reference path="../refs.ts" />
'use strict';
var ProductService = (function () {
    function ProductService($http, $q, $log) {
        var _this = this;
        this.$http = $http;
        this.$q = $q;
        this.$log = $log;
        this.FEATURED_PRODUCTS_FILE = 'data/featured.json';
        this.SEARCH_PRODUCTS_FILE = 'data/search.json';
        this.getFeaturedProducts = function () {
            return _this.getDataFromJSON(_this.FEATURED_PRODUCTS_FILE);
        };
        this.getSearchProducts = function () {
            return _this.getDataFromJSON(_this.SEARCH_PRODUCTS_FILE);
        };
        this.getDataFromJSON = function (fileName) {
            return _this.$http.get(fileName).then(function (response) {
                return response.data.items;
            }, function (reason) {
                _this.$log.error("Can not load file " + fileName);
                return _this.$q.reject(reason);
            });
        };
    }
    ProductService.$inject = ['$http', '$q', '$log'];
    return ProductService;
})();

angular.module('auction').service('ProductService', ProductService);
//# sourceMappingURL=ProductService.js.map
