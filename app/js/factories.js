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
