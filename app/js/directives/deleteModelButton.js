"use strict";

angular.module("ophicleideWeb")
  .directive("deleteModelButton", [
      "$rootScope",
      "$uibModal",
      "$log",
      "modelActions",
      function(
        $rootScope,
        $uibModal,
        $log,
        modelActions) {
    return {
      restrict: "E",
      scope: {
        title: "@",
        class: "@",
        model: "@",
      },
      templateUrl: "views/directives/delete-model-button.html",
      replace: true,
      link: function(scope) {
        scope.deleteModel = function() {
          var model = JSON.parse(scope.model);
          modelActions.deleteModel(model.id);
          $rootScope.refresh();
        };
      }
    };
  }]);

