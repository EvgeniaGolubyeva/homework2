// Implement SearchController here. It should manage Search Results page.
/// <reference path="../refs.ts" />
//create search page controller
var SearchController = (function () {
    function SearchController($scope, $http, $location) {
        //TODO extract json from controller into separate server
        $http.get('data/search.json').success(function (data) {
            $scope.searchProducts = data.items;
        }).error(function () {
            console.log("Wasn't able to parse JSON");
        });

        $scope.home = function () {
            $location.url('/');
        };
    }
    SearchController.$inject = ['$scope', '$http', '$location'];
    return SearchController;
})();

angular.module('auction').controller('SearchController', SearchController);
//# sourceMappingURL=SearchController.js.map
