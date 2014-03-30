// Implement HomeController here. It should manage Home page.
/// <reference path="../refs.ts" />
'use strict';
var HomeController = (function () {
    function HomeController(featuredProducts, $scope) {
        this.featuredProducts = featuredProducts;
        this.$scope = $scope;
        this.$scope.model = this;
    }
    HomeController.$inject = ['featuredProducts', '$scope'];

    HomeController.resolve = {
        featuredProducts: [
            'ProductService', function (productService) {
                return productService.getFeaturedProducts().then(function (data) {
                    return data;
                });
            }]
    };
    return HomeController;
})();

angular.module('auction').controller('HomeController', HomeController);
//# sourceMappingURL=HomeController.js.map
