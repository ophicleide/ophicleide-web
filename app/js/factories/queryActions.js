"use strict";

angular.module("ophicleideWeb")
  .factory("queryActions", ["$uibModal", function($uibModal) {
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
