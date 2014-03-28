// Implement SearchController here. It should manage Search Results page.
/// <reference path="../refs.ts" />
var SearchController = (function () {
    function SearchController($scope, searchProducts) {
        $scope.searchProducts = searchProducts;
    }
    SearchController.$inject = ['$scope', 'searchProducts'];
    return SearchController;
})();

angular.module('auction').controller('SearchController', SearchController);
//# sourceMappingURL=SearchController.js.map
