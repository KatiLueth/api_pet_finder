// Public/app.js (clientapp.js)
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/dog', {
            templateUrl: '/views/templates/dog.html',
            controller: 'DogController'
        })
        .when('/hedgehog', {
            templateUrl: '/views/templates/hedgehog.html',
            controller: 'HedgehogController'
        })
        .when('/parakeet', {
            templateUrl: '/views/templates/parakeet.html',
            controller: 'ParakeetController'
        })
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: '/home',
            templateUrl: '/views/templates/home.html',
        })
}]);