"use strict";

angular.module("ophicleideWeb")
  .directive("createModelButton", [
      "$uibModal",
      "$log",
      function(
        $uibModal,
        $log) {
    return {
      restrict: "E",
      scope: {
        title: "@",
        class: "@",
      },
      templateUrl: "views/directives/create-model-button.html",
      replace: true,
      link: function(scope) {
        scope.openCreateModelModal = function() {
          var modalInstance = $uibModal.open({
            ariaLabelledBy: "modal-title",
            ariaDescribedBy: "modal-body",
            templateUrl: "views/modals/create-model.html",
            controller: "ModelsModalCtrl",
          });
          modalInstance.rendered.then(function() {
            angular.element("input#modelName").focus();
          });
          modalInstance.result.then(function(result) {
            $log.info(result);
          });
        };
      }
    };
  }]);
