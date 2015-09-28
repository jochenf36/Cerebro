angular.module('cerebroControllers', []).controller('homeController', ['$scope', 'homeFactory', function($scope, homeFactory) {

  // setup total processed sentiment items
  $scope.totalProcessed = 30000;

  // setup avarage Sentiment Pie chart
  $scope.avarageSentimentPieChartData = homeFactory.retrieveAvarageSentimentPieChartData;
  $scope.avarageSentimentPieChartOptions = {
    "chart": {
      "type": 'pieChart',
      "height": 600,
      "x": function(d) {
        return d.key;
      },
      "y": function(d) {
        return d.y;
      },
      "showLabels": false,
      "transitionDuration": 500,
      "labelThreshold": 0.01,
      "showLegend": false,
      "color": ['#FFE066', '#F25F5C'],
      "donut": true
    }
  };

  // setup historicalBarChart
  $scope.historicalBarChartData = homeFactory.retrieveHistoricalBarChartData;
  $scope.historicalBarChartOptions = {
    chart: {
      type: 'discreteBarChart',
      height: '300',
      margin: {
        top: 20,
        right: 0,
        bottom: 60,
        left: 35
      },
      x: function(d) {
        return d.label;
      },
      y: function(d) {
        return d.value;
      },
      valueFormat: function(d) {
        return d3.format(',.4f')(d);
      },
      transitionDuration: 500,
      xAxis: {
        axisLabel: 'X Axis'
      },
      yAxis: {
        axisLabel: 'Y Axis',
        axisLabelDistance: 30
      },
      "color": ['#70C1B3']
    }
  };

  // setup bar chart
  $scope.barChart = homeFactory.retrieveBarData;


}]);
