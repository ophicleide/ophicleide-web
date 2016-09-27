"use strict";

angular.module("ophicleideWeb")
  .controller("QueriesCtrl", [
      "$scope",
      "queryActions",
      function(
        $scope,
        queryActions) {

    angular.extend($scope, queryActions);

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
