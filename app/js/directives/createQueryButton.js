"use strict";

angular.module("ophicleideWeb")
  .directive("createQueryButton", [
      "$uibModal",
      "$log",
      "alertActions",
      "modelActions",
      function(
        $uibModal,
        $log,
        alertActions,
        modelActions) {
    return {
      restrict: "E",
      scope: {
        title: "@",
        class: "@",
      },
      templateUrl: "views/directives/create-query-button.html",
      replace: true,
      link: function(scope) {
        scope.openCreateQueryModal = function() {
          modelActions.getModels().then(function(response) {
            var models = response.data.models;
            if (models.length > 0) {
                var modalInstance = $uibModal.open({
                  ariaLabelledBy: "modal-title",
                  ariaDescribedBy: "modal-body",
                  templateUrl: "views/modals/create-query.html",
                  controller: "QueriesModalCtrl",
                });
                modalInstance.rendered.then(function() {
                  angular.element("input#queryName").focus();
                });
                modalInstance.result.then(function(result) {
                  $log.info(result);
                });
            } else {
              alertActions.addWarningAlert("No models available",
                  "Please create a training model before starting any queries");
            }
          });
        };
      }
    };
  }]);
