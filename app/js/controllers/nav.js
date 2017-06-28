"use strict";

angular.module("ophicleideWeb")
  .controller("NavCtrl", ["$scope", "$location", function($scope, $location) {
    $scope.isActive = function(route) {
      return $location.path() === route;
    };
  }]);
