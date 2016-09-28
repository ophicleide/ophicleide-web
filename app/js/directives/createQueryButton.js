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
        model: "@",
      },
      templateUrl: "views/directives/create-query-button.html",
      replace: true,
      link: function(scope) {
        scope.openCreateQueryModal = function() {
          modelActions.getModels().then(function(response) {
            if (scope.model != undefined) {
              var models = [JSON.parse(scope.model)];
            } else {
              var models = response.data.models;
            }
            if (models.length > 0) {
                var modalInstance = $uibModal.open({
                  ariaLabelledBy: "modal-title",
                  ariaDescribedBy: "modal-body",
                  templateUrl: "views/modals/create-query.html",
                  controller: "QueriesModalCtrl",
                  resolve: {
                    models: function() { return models; },
                  },
                });
                modalInstance.rendered.then(function() {
                  angular.element("input#queryWord").focus();
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
