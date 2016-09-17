"use strict";

angular.module("ophicleideWeb")
  .directive("createModelButton", function($uibModal, $log) {
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
          modalInstance.result.then(function(result) {
            $log.info(result);
          });
        };
      }
    };
  });
