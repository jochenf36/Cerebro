(function() {
  'use strict';
  angular.module('cerebroControllers').controller('piechart1Controller', ['$scope', function($scope) {
    $scope.options = {
      chart: {
        type: 'pieChart',
        height: 250,
        x: function(d) {
          return d.key;
        },
        y: function(d) {
          return d.y;
        },
        pie: {
          startAngle: function(d) {
            return d.startAngle / 2 - Math.PI / 2;
          },
          endAngle: function(d) {
            return d.endAngle / 2 - Math.PI / 2;
          }
        },
        transitionDuration: 500,
        labelThreshold: 0.01,
        color: ['#CCFF99', '#FFCCFF'],
        showLabels: false,
        showLegend: false,
        donut: true,
      }
    };

    $scope.data = [{
      key: "Positive",
      y: 4000
    }, {
      key: "Negative",
      y: 2300
    }];
  }]);
})();
