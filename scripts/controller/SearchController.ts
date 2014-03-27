// Implement SearchController here. It should manage Search Results page.

/// <reference path="../refs.ts" />

//create search page controller
class SearchController {
    static $inject = ['$scope', '$http', '$location'];

    constructor ($scope, $http, $location) {

        //TODO extract json from controller into separate server
        $http.get('data/search.json')
            .success(function (data) {
                $scope.searchProducts = data.items;
            })
            .error(function() {
                console.log("Wasn't able to parse JSON")
            });

        $scope.home = () => {
            $location.url('/');
        }
    }
}

angular.module('auction').controller('SearchController', SearchController);
