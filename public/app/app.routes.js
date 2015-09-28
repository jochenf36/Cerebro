// This file will contain all the routing done by the app
var app = angular.module('cerebro');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /404
  $urlRouterProvider.otherwise("/404");

  // no route goes to index
  $urlRouterProvider.when('','/');

  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: '/app/components/home/home.view.html',
      controller:'homeController',
      controllerAs:'contrl'
    })

    .state('histogram',{
      url:'/histogram',
      templateUrl: '/app/components/histogram/histogram.view.html',
      controller:'histogramController',
      controllerAs:'contrl'
    })

    .state('worldmap',{
      url:'/worldmap',
      templateUrl: '/app/components/worldmap/worldmap.view.html',
      controller:'worldmapController',
      controllerAs:'contrl'
    });




}]);
