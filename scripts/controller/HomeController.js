// Implement HomeController here. It should manage Home page.
/// <reference path="../refs.ts" />
var HomeController = (function () {
    function HomeController($scope, featuredProducts) {
        $scope.featuredProducts = featuredProducts;
    }
    HomeController.$inject = ['$scope', 'featuredProducts'];
    return HomeController;
})();

angular.module('auction').controller('HomeController', HomeController);
//# sourceMappingURL=HomeController.js.map
