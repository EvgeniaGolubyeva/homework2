// Implement HomeController here. It should manage Home page.
//create home page controller

/// <reference path="../refs.ts" />

class HomeController {
    static $inject = ['$scope', '$http', '$location'];

    constructor ($scope, $http, $location, featuredItems) {

        //TODO extract json from controller into separate server
        $http.get('data/featured.json')
            .success(function (data) {
                $scope.featuredProducts = data.items;
            })
            .error(function() {
                console.log("Wasn't able to parse JSON")
            });

        $scope.search = () => {
            $location.url('/search');
        }
    }
}

angular.module('auction').controller('HomeController', HomeController);
