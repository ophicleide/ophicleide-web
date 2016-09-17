"use strict";

angular.module("ophicleideWeb")
  .controller("ModelsCtrl", ["$scope", "$log", function($scope, $log) {
    $scope.items = [];
    $scope.emptyItems = function() {
      if ($scope.items.length == 0 )
        return true;
      return false;
    };
    $scope.config = {
      showSelectBox: false,
      selectionMatchProp: "name",
    };
  }]);
