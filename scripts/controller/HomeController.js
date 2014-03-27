// Implement HomeController here. It should manage Home page.
/// <reference path="../refs.ts" />
var HomeController = (function () {
    function HomeController($scope, ProductService) {
        ProductService.getFeaturedProducts().then(function (data) {
            $scope.featuredProducts = data.items;
        });
    }
    HomeController.$inject = ['$scope', 'ProductService'];
    return HomeController;
})();

angular.module('auction').controller('HomeController', HomeController);
//# sourceMappingURL=HomeController.js.map
