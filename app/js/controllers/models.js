"use strict";

angular.module("ophicleideWeb")
  .controller("ModelsCtrl", [
      "$scope",
      "$rootScope",
      "$interval",
      "$log",
      "modelActions",
      "queryActions",
      function(
        $scope,
        $rootScope,
        $interval,
        $log,
        modelActions,
        queryActions) {

    $scope.items = [];

    $scope.emptyItems = function() {
      if ($scope.items.length == 0 )
        return true;
      return false;
    };

    function getModelDetail (item, event) {
      $log.info(`get item ${item.id} detail`);
    };

    $scope.config = {
      showSelectBox: false,
      selectionMatchProp: "name",
      onClick: getModelDetail,
    };

    function updateItems(itemList) {
      $scope.items = itemList;
    };

    function reloadData() {
      $log.info("reloading data");
      modelActions.getModels().then(function(response) {
        if (response.data.models != undefined) {
          updateItems(response.data.models);
        }
      }, function(error) {
        $log.error("Error retrieving model data from the server");
      });
    };

    $rootScope.refresh = reloadData;

    $scope.deleteModel = function(action, item) {
      modelActions.deleteModel(item.id);
      reloadData();
    };

    function createQuery(action, item) {
      $log.info(`create query for ${item.id}`);
    };

    $scope.actionButtons = [
      {
        name: "Create Query",
        title: "Create a new query based on this model",
        actionFn: createQuery,
      },
      {
        name: "Delete",
        title: "Delete this training model",
        actionFn: $scope.deleteModel,
      },
    ];

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
