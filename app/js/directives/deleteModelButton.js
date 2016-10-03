"use strict";

angular.module("ophicleideWeb")
  .directive("deleteModelButton", [
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
        model: "@",
      },
      templateUrl: "views/directives/delete-model-button.html",
      replace: true,
      link: function(scope) {
        var model = JSON.parse(scope.model);
        scope.openConfirmDeleteModelModal = function() {
          var modalInstance = $uibModal.open({
            ariaLabelledBy: "modal-title",
            ariaDescribedBy: "modal-body",
            templateUrl: "views/modals/delete-model.html",
            controller: "ModelsDeleteModalCtrl",
            resolve: {
              model: function () { return model; },
            },
          });
        };
      }
    };
  }]);

