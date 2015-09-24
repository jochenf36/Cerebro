var app = angular.module('cerebro');

app.controller("mainController",function($scope) {
  $scope.message = "This is the default message";
});

app.controller("aboutController",function($scope) {
  $scope.message = "This is the about message";
});

app.controller("contactController",function($scope) {
  $scope.message = "This is the contact message";
});
