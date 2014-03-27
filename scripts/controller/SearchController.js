// Implement SearchController here. It should manage Search Results page.
/// <reference path="../refs.ts" />
var SearchController = (function () {
    function SearchController($scope, ProductService) {
        ProductService.getSearchProducts().then(function (data) {
            $scope.searchProducts = data.items;
        });
    }
    SearchController.$inject = ['$scope', 'ProductService'];
    return SearchController;
})();

angular.module('auction').controller('SearchController', SearchController);
//# sourceMappingURL=SearchController.js.map
