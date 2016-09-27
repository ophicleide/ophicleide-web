"use strict";

angular.module("ophicleideWeb")
  .factory("alertActions", [
      "$rootScope",
      function(
        $rootScope) {
    var removeAlert = function(index) {
      $rootScope.alerts.splice(index, 1);
    };
    var addSuccessAlert = function(title, msg) {
      $rootScope.alerts.push({
        title: title,
        msg: msg,
        severity: "alert-success",
        icon: "pficon-ok",
      });
    };
    var addDangerAlert = function(title, msg) {
      $rootScope.alerts.push({
        title: title,
        msg: msg,
        severity: "alert-danger",
        icon: "pficon-error-circle-o",
      });
    };
    var addWarningAlert = function(title, msg) {
      $rootScope.alerts.push({
        title: title,
        msg: msg,
        severity: "alert-warning",
        icon: "pficon-warning-triangle-o",
      });
    };
    return {
      removeAlert: removeAlert,
      addSuccessAlert: addSuccessAlert,
      addDangerAlert: addDangerAlert,
      addWarningAlert: addWarningAlert,
    };
  }]);
