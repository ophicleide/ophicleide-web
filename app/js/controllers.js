var module = angular.module("Ophicleide.controllers", [
]);

module.controller("NavCtrl", ["$scope", "$location", function($scope, $location) {
  $scope.isActive = function(route) {
    return $location.path() === route;
  };

}]);
