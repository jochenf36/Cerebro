// Declare app level module which depends on filters, and services

var app = angular.module('cerebro', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'templates/home.html',
    controller: 'mainController'
  }).
  when('/about', {
    templateUrl: 'templates/about.html',
    controller: 'aboutController'
  });

  // FIXME: make this work without getting the error in the console
  // $locationProvider.html5Mode(true);

});

app.controller("mainController",function($scope) {
  $scope.message = "This is the default message";
});

app.controller("aboutController",function($scope) {
  $scope.message = "This is the about message";
});

app.controller("contactController",function($scope) {
  $scope.message = "This is the contact message";
});
