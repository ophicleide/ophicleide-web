"use strict";

angular.module("ophicleideWeb")
  .controller("QueriesModalCtrl", [
      "$scope",
      "$uibModalInstance",
      "models",
      function(
        $scope,
        $uibModalInstance,
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
        $uibModalInstance.close();
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
