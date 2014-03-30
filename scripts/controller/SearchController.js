// Implement SearchController here. It should manage Search Results page.
/// <reference path="../refs.ts" />
'use strict';
var SearchController = (function () {
    function SearchController(searchProducts, $scope) {
        this.searchProducts = searchProducts;
        this.$scope = $scope;
        $scope.model = this;
    }
    SearchController.$inject = ['searchProducts', '$scope'];

    SearchController.resolve = {
        searchProducts: [
            'ProductService', function (productService) {
                return productService.getSearchProducts().then(function (data) {
                    return data;
                });
            }]
    };
    return SearchController;
})();

angular.module('auction').controller('SearchModelController', SearchController);
//# sourceMappingURL=SearchController.js.map
