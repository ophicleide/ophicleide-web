var module = angular.module("Ophicleide.controllers", [
    "ngAnimate",
    "ui.bootstrap",
    "patternfly.notification",
    "Ophicleide.factories",
]);

module.controller("BodyCtrl", ["$scope", "$rootScope", function($scope, $rootScope) {
  $scope.alerts = [];
  $scope.removeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
  $rootScope.addAlert = function(title, msg) {
    $scope.alerts.push({title: title, msg: msg});
  };
}]);

module.controller("NavCtrl", ["$scope", "$location", function($scope, $location) {
  $scope.isActive = function(route) {
    return $location.path() === route;
  };
}]);

module.controller("ModelsCtrl", ["$scope", "modelActions", function($scope, modelActions) {
  angular.extend($scope, modelActions);
}]);

module.controller("ModelsModalCtrl", ["$scope", "$rootScope", "$uibModalInstance", "$log", function($scope, $rootScope, $uibModalInstance, $log) {
  var fields = {
    name: "",
    modelUrls: "",
  };
  $scope.fields = fields;
  $scope.ok = function() {
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
