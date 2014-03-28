// Implement HomeController here. It should manage Home page.
/// <reference path="../refs.ts" />
var HomeController = (function () {
    function HomeController($scope, featuredProducts) {
        $scope.featuredProducts = featuredProducts;
    }
    HomeController.$inject = ['$scope', 'featuredProducts'];

    HomeController.resolve = {
        featuredProducts: [
            'ProductService', function (productService) {
                return productService.getFeaturedProducts().then(function (data) {
                    return data.items;
                });
            }]
    };
    return HomeController;
})();

angular.module('auction').controller('HomeController', HomeController);
//# sourceMappingURL=HomeController.js.map
