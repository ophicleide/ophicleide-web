"use strict";

angular.module("ophicleideWeb")
  .controller("ModelsCtrl", ["$scope", "modelActions", "$log", function($scope, modelActions, $log) {
    angular.extend($scope, modelActions);
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
    $scope.addModel = function() {
      modelActions.newModel();
    };
  }]);
