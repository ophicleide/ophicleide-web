"use strict";

angular.module("ophicleideWeb")
  .controller("ModelsModalCtrl", ["$scope", "$rootScope", "$uibModalInstance", "alertActions", function($scope, $rootScope, $uibModalInstance, alertActions) {
    var fields = {
      name: "",
      urls: "",
      nameEmpty: false,
      urlsEmpty: false,
    };
    $scope.fields = fields;
    $scope.ok = function() {
      if ($scope.fields.name === "") {
        $scope.fields.nameEmpty = true;
      }
      else {
        $scope.fields.nameEmpty = false;
      }
      if ($scope.fields.urls === "") {
        $scope.fields.urlsEmpty = true;
      }
      else {
        $scope.fields.urlsEmpty = false;
      }
      if ($scope.fields.nameEmpty === false &&
          $scope.fields.urlsEmpty === false) {
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
        case "name":
          ret = $scope.fields.nameEmpty;
          break;
        case "urls":
          ret = $scope.fields.urlsEmpty;
          break;
      }
      return ret;
    };
  }]);
