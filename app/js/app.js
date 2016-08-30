var app = angular.module("Ophicleide", [
    'ngRoute'
]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.
    when("/models", {
      templateUrl: "partials/models.html"
    }).
    when("/queries", {
      templateUrl: "partials/queries.html"
    }).
    otherwise("/models");
}]);

