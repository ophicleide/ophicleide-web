var module = angular.module("Ophicleide.controllers", [
    "ngAnimate",
    "ui.bootstrap",
    "patternfly.notification",
    "Ophicleide.factories",
]);

module.controller("BodyCtrl", ["$scope", "$rootScope", function($scope, $rootScope) {
  $rootScope.alerts = [];
}]);

module.controller("NavCtrl", ["$scope", "$location", function($scope, $location) {
  $scope.isActive = function(route) {
    return $location.path() === route;
  };
}]);

module.controller("ModelsCtrl", ["$scope", "modelActions", function($scope, modelActions) {
  angular.extend($scope, modelActions);
}]);

module.controller("ModelsModalCtrl", ["$scope", "$rootScope", "$uibModalInstance", "$log", "alertActions", function($scope, $rootScope, $uibModalInstance, $log, alertActions) {
  var fields = {
    name: "",
    urls: "",
    nameEmpty: false,
    urlsEmpty: false,
  };
  $scope.fields = fields;
  $scope.ok = function() {
    if ($scope.fields.name === "") {
      $scope.fields.nameEmpty = true;
    }
    else {
      $scope.fields.nameEmpty = false;
    }
    if ($scope.fields.urls === "") {
      $scope.fields.urlsEmpty = true;
    }
    else {
      $scope.fields.urlsEmpty = false;
    }
    if ($scope.fields.nameEmpty === false &&
        $scope.fields.urlsEmpty === false) {
      $uibModalInstance.close();
    }
  };
  $scope.cancel = function() {
    $uibModalInstance.dismiss();
  };
  $scope.classHasError = function(group) {
    if ($scope.hasError(group)) {
      return "has-error";
    }
  };
  $scope.hasError = function(group) {
    var ret = false;
    switch (group) {
      case "name":
        ret = $scope.fields.nameEmpty;
        break;
      case "urls":
        ret = $scope.fields.urlsEmpty;
        break;
    }
    return ret;
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
