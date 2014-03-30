// Implement HomeController here. It should manage Home page.

/// <reference path="../refs.ts" />

'use strict'

interface IHomeScope extends ng.IScope {
    model: HomeController;
}

class HomeController {
    static $inject = ['featuredProducts', '$scope'];

    constructor (private featuredProducts: Product[], private $scope: IHomeScope) {
        this.$scope.model = this;
    }

    public static resolve = {
        featuredProducts: ['ProductService', (productService: IProductService) => {
            return productService.getFeaturedProducts().then ((data) => {
                return data;
            });
        }]
    }
}

angular.module('auction').controller('HomeController', HomeController);