"use strict";

var app = angular.module("ophicleideWeb", [
    "ngRoute",
    "ngAnimate",
    "ui.bootstrap",
    "patternfly.notification",
    "patternfly.views",
]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.
    when("/models", {
      templateUrl: "views/models.html"
    }).
    when("/queries", {
      templateUrl: "partials/queries.html"
    }).
    otherwise("/models");
}]);

