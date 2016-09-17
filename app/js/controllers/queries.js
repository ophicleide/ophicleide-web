"use strict";

angular.module("ophicleideWeb")
  .controller("QueriesCtrl", ["$scope", "queryActions", function($scope, queryActions) {
    angular.extend($scope, queryActions);
  }]);
