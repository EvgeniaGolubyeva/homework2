// Implement SearchController here. It should manage Search Results page.
/// <reference path="../refs.ts" />
var SearchController = (function () {
    function SearchController($scope, searchProducts) {
        $scope.searchProducts = searchProducts;
    }
    SearchController.$inject = ['$scope', 'searchProducts'];

    SearchController.resolve = {
        searchProducts: [
            'ProductService', function (productService) {
                return productService.getSearchProducts().then(function (data) {
                    return data.items;
                });
            }]
    };
    return SearchController;
})();

angular.module('auction').controller('SearchController', SearchController);
//# sourceMappingURL=SearchController.js.map
