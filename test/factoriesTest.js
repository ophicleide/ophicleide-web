'use strict';

var modelActions;
var queryActions;
var $http;
var modelsPath = "/api/models";
var queriesPath = "/api/queries";

describe('Testing rest apis of factories', function() {

    beforeEach(module('ophicleideWeb'));

    beforeEach(inject(function(_modelActions_, _queryActions_, _$http_) {
        modelActions = _modelActions_;
        queryActions = _queryActions_;
        $http = _$http_;
        sinon.spy($http, 'post');
        sinon.spy($http, 'get');
        sinon.spy($http, 'delete');
    }));

    describe('Testing rest modelActions api paths', function() {

        it('modelActions delete rest test', function() {
            modelActions.deleteModel(1);
            chai.expect($http.delete.getCall(0).args[0]).to.equal(modelsPath + '/1');
            chai.expect($http.delete.calledOnce).to.equal(true);
        });

        it('modelAction getModels rest test', function() {
            modelActions.getModels();
            chai.expect($http.get.getCall(0).args[0]).to.equal(modelsPath);
            chai.expect($http.get.calledOnce).to.equal(true);
        });

        it('modelAction createModels rest test', function() {
            modelActions.createModel();
            chai.expect($http.post.getCall(0).args[0]).to.equal(modelsPath);
            chai.expect($http.post.calledOnce).to.equal(true);
        });
    });

    describe('Testing rest queryActions api paths', function() {

        it('queryAction createQuery rest api test', function() {
            queryActions.createQuery();
            chai.expect($http.post.getCall(0).args[0]).to.equal(queriesPath);
            chai.expect($http.post.calledOnce).to.equal(true);
        });

        it('queryAction getQuery rest api test', function() {
            queryActions.getQueries();
            chai.expect($http.get.getCall(0).args[0]).to.equal(queriesPath);
            chai.expect($http.get.calledOnce).to.equal(true);
        });
    });
});
