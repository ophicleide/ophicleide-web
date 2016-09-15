var module = angular.module("Ophicleide.controllers", [
    "ngAnimate",
    "ui.bootstrap",
    "patternfly.notification",
    "patternfly.views",
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

module.controller("ModelsCtrl", ["$scope", "modelActions", "$log", function($scope, modelActions, $log) {
  angular.extend($scope, modelActions);
  $scope.items = [];
  $scope.emptyItems = function() {
    if ($scope.items.length == 0 )
      return true;
    return false;
  };
  $scope.config = {
    showSelectBox: false,
    selectionMatchProp: "name",
  };
  $scope.addModel = function() {
    modelActions.newModel();
  };
}]);

module.controller("ModelsModalCtrl", ["$scope", "$rootScope", "$uibModalInstance", "alertActions", function($scope, $rootScope, $uibModalInstance, alertActions) {
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
  var fields = {
    word: "",
    wordEmpty: false,
  };
  $scope.fields = fields;
  $scope.ok = function() {
    if ($scope.fields.word === "") {
      $scope.fields.wordEmpty = true;
    } else {
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
      case "word":
        ret = $scope.fields.wordEmpty;
        break;
    }
    return ret;
  };
}]);
