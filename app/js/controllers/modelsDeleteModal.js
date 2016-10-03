"use strict";

angular.module("ophicleideWeb")
  .controller("ModelsDeleteModalCtrl", [
      "$scope",
      "$rootScope",
      "$uibModalInstance",
      "$log",
      "alertActions",
      "modelActions",
      "model",
      function(
        $scope,
        $rootScope,
        $uibModalInstance,
        $log,
        alertActions,
        modelActions,
        model) {

    $scope.model = model;

    $scope.ok = function() {
          modelActions.deleteModel(
            model.id
          ).then(function() {
            $uibModalInstance.close();
            $rootScope.refresh();
          }, function(error) {
            $uibModalInstance.close();
            alertActions.addDangerAlert("Server Error", error.data);
            $log.info(error);
          });
    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss();
    };

  }]);
