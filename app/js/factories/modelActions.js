"use strict";

angular.module("ophicleideWeb")
  .factory("modelActions", [
      "$log",
      "$http",
      function(
        $log,
        $http) {

    function getModels() {
      return $http.get("/api/models");
    };

    function createModel(data) {
      data = JSON.stringify(data);
      $log.info("creating model: " + data);
      return $http.post("/api/models", data);
    };

    function deleteModel(modelId) {
      return $http.delete(`/api/models/${modelId}`);
    };

    return {
      getModels: getModels,
      createModel: createModel,
      deleteModel: deleteModel,
    };
  }]);
