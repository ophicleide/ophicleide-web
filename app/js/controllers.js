var module = angular.module("Ophicleide.controllers", [
    "ngAnimate",
    "ui.bootstrap",
]);

module.controller("NavCtrl", ["$scope", "$location", function($scope, $location) {
  $scope.isActive = function(route) {
    return $location.path() === route;
  };
}]);

module.controller("ModelsCtrl", ["$scope", "$uibModal", function($scope, $uibModal) {
  $scope.openModal = function() {
    $uibModal.open({
      ariaLabelledBy: "modal-title",
      ariaDescribedBy: "modal-body",
      templateUrl: "partials/modelmodal.html",
      controller: "ModelsModalCtrl",
    });
  };
}]);

module.controller("ModelsModalCtrl", ["$scope", "$uibModalInstance", function($scope, $uibModalInstance) {
  $scope.ok = function() {
    $uibModalInstance.close();
  };
  $scope.cancel = function() {
    $uibModalInstance.dismiss();
  };
}]);

module.controller("QueriesCtrl", ["$scope", "$uibModal", function($scope, $uibModal) {
  $scope.openModal = function() {
    $uibModal.open({
      ariaLabelledBy: "modal-title",
      ariaDescribedBy: "modal-body",
      templateUrl: "partials/querymodal.html",
      controller: "QueriesModalCtrl",
    });
  };
}]);

module.controller("QueriesModalCtrl", ["$scope", "$uibModalInstance", function($scope, $uibModalInstance) {
  $scope.ok = function() {
    $uibModalInstance.close();
  };
  $scope.cancel = function() {
    $uibModalInstance.dismiss();
  };
}]);
