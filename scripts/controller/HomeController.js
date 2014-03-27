// Implement HomeController here. It should manage Home page.
//create home page controller
/// <reference path="../refs.ts" />
var HomeController = (function () {
    function HomeController($scope, $http, $location, featuredItems) {
        //TODO extract json from controller into separate server
        $http.get('data/featured.json').success(function (data) {
            $scope.featuredProducts = data.items;
        }).error(function () {
            console.log("Wasn't able to parse JSON");
        });

        $scope.search = function () {
            $location.url('/search');
        };
    }
    HomeController.$inject = ['$scope', '$http', '$location'];
    return HomeController;
})();

angular.module('auction').controller('HomeController', HomeController);
//# sourceMappingURL=HomeController.js.map
