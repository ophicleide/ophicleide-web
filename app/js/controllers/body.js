"use strict";

angular.module("ophicleideWeb")
  .controller("BodyCtrl", [
      "$scope",
      "$rootScope",
      "alertActions",
      function(
        $scope,
        $rootScope,
        alertActions) {
    $rootScope.alerts = [];
    $rootScope.bodyClass = "";
    $scope.removeAlert = alertActions.removeAlert;
  }]);
