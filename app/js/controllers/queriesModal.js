"use strict";

angular.module("ophicleideWeb")
  .controller("QueriesModalCtrl", [
      "$scope",
      "$rootScope",
      "$uibModalInstance",
      "$log",
      "$window",
      "alertActions",
      "queryActions",
      "models",
      function(
        $scope,
        $rootScope,
        $uibModalInstance,
        $log,
        $window,
        alertActions,
        queryActions,
        models) {

    var fields = {
      word: "",
      wordEmpty: false,
    };

    $scope.selectedModel = models[0].id;
    $scope.models = models;
    $scope.fields = fields;

    $scope.ok = function() {
      if ($scope.fields.word === "") {
        $scope.fields.wordEmpty = true;
      } else {
        queryActions.createQuery({
          word: $scope.fields.word,
          model: $scope.selectedModel,
        }).then(function(result) {
          $log.info(result);
          $uibModalInstance.close();
          $window.location.href = "/#/queries";
          $rootScope.refresh();
        }, function(error) {
          $uibModalInstance.close();
          alertActions.addDangerAlert("Server Error", error.data);
          $log.info(error);
        });
      }
    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss();
    };

    $scope.classHasError = function(group) {
      if ($scope.hasError(group)) {
        return "has-error";
      }
    };

    $scope.hasError = function(group) {
      var ret = false;
      switch (group) {
        case "word":
          ret = $scope.fields.wordEmpty;
          break;
      }
      return ret;
    };
  }]);
