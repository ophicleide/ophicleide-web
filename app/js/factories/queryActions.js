"use strict";

angular.module("ophicleideWeb")
  .factory("queryActions", [
      "$log",
      "$http",
      function(
        $log,
        $http) {
    
    function getQueries() {
      return $http.get("/api/queries");
    }

    function createQuery(data) {
      data = JSON.stringify(data);
      $log.info("creating query: " + data);
      return $http.post("/api/queries", data);
    }

    return {
      getQueries: getQueries,
      createQuery: createQuery,
    };
  }]);
