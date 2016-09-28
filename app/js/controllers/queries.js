"use strict";

angular.module("ophicleideWeb")
  .controller("QueriesCtrl", [
      "$scope",
      "$rootScope",
      "$log",
      "queryActions",
      function(
        $scope,
        $rootScope,
        $log,
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

    function updateItems(itemList) {
      $scope.items = itemList;
    };
    
    function reloadData() {
      $log.info("reloading query data");
      queryActions.getQueries().then(function(response) {
        if (response.data.queries != undefined) {
          updateItems(response.data.queries);
        }
      }, function(error) {
        $log.error("Error retrieving model data from the server");
      });
    };

    $rootScope.refresh = reloadData;

    /*
    var refresh_seconds = 10;
    var intervalPromise = $interval(function() {
      reloadData();
    }, refresh_seconds * 1000);

    $scope.$on("$destroy", function() {
      if (intervalPromise) {
        $interval.cancel(intervalPromise);
      }
    });
    */

    /* make sure to call reload data initially to avoid a 10 second wait */
    reloadData();
  }]);
