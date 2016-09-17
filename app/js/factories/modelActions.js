"use strict";

angular.module("ophicleideWeb")
  .factory("modelActions", ["$uibModal", function($uibModal) {
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
