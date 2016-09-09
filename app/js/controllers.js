var module = angular.module("Ophicleide.controllers", [
    "ngAnimate",
    "ui.bootstrap",
    "Ophicleide.factories",
]);

module.controller("NavCtrl", ["$scope", "$location", function($scope, $location) {
  $scope.isActive = function(route) {
    return $location.path() === route;
  };
}]);

module.controller("ModelsCtrl", ["$scope", "modelActions", function($scope, modelActions) {
  angular.extend($scope, modelActions);
}]);

module.controller("ModelsModalCtrl", ["$scope", "$uibModalInstance", "$log", function($scope, $uibModalInstance, $log) {
  var fields = {
    name: "",
    modelUrls: "",
  };
  $scope.fields = fields;
  $scope.ok = function() {
    $log.info($scope.fields.name);
    $log.info($scope.fields.modelUrls);
    $uibModalInstance.close();
  };
  $scope.cancel = function() {
    $uibModalInstance.dismiss();
  };
}]);

module.controller("QueriesCtrl", ["$scope", "queryActions", function($scope, queryActions) {
  angular.extend($scope, queryActions);
}]);

module.controller("QueriesModalCtrl", ["$scope", "$uibModalInstance", function($scope, $uibModalInstance) {
  $scope.ok = function() {
    $uibModalInstance.close();
  };
  $scope.cancel = function() {
    $uibModalInstance.dismiss();
  };
}]);
