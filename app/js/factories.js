"use strict";

var module = angular.module("Ophicleide.factories", [
    "ui.bootstrap",
]);

module.factory("modelActions", ["$uibModal", function($uibModal) {
  function newModel() {
    return $uibModal.open({
      ariaLabelledBy: "modal-title",
      ariaDescribedBy: "modal-body",
      templateUrl: "partials/modelmodal.html",
      controller: "ModelsModalCtrl",
    }).result;
  };
  return {
    newModel: newModel,
  };
}]);

module.factory("queryActions", ["$uibModal", function($uibModal) {
  function newQuery() {
    return $uibModal.open({
      ariaLabelledBy: "modal-title",
      ariaDescribedBy: "modal-body",
      templateUrl: "partials/querymodal.html",
      controller: "QueriesModalCtrl",
    }).result;
  };
  return {
    newQuery: newQuery,
  };
}]);

module.factory("alertActions", ["$rootScope", function($rootScope) {
  removeAlert = function(index) {
    $rootScope.alerts.splice(index, 1);
  };
  addSuccessAlert = function(title, msg) {
    $rootScope.alerts.push({
      title: title,
      msg: msg,
      severity: "alert-success",
      icon: "pficon-ok",
    });
  };
  addDangerAlert = function(title, msg) {
    $rootScope.alerts.push({
      title: title,
      msg: msg,
      severity: "alert-danger",
      icon: "pficon-error-circle-o",
    });
  };
  addWarningAlert = function(title, msg) {
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
