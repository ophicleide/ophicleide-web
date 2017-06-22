'use strict';
describe('Testing controllers', function() {

    var dummyModels =
        [{
            id: "1",
            name: "austen",
            status: "ready",
            callback: "http://localhost/model-callback",
            urls: "https://ia600504.us.archive.org/25/items/thecompleteproje31100gut/31100.txt"
        }];
    var modelsPath = "/api/models";
    var queriesPath = "/api/queries";
    var $scope;
    var modelActions;
    var $rootScope;

    beforeEach(module('ophicleideWeb'));

    describe('Testing default values for model creation', function() {

        beforeEach(inject(function (_$controller_) {
            $scope = {};
            _$controller_("ModelsModalCtrl", {
                $scope: $scope,
                $uibModalInstance: {}
            });
        }));

        it('Default options for model creation must be empty', function() {
            chai.expect($scope.fields.name).to.equal("");
            chai.expect($scope.fields.urls).to.equal("");
        });
    });

    describe('Testing loading models', function() {

        beforeEach(inject(function (_$controller_, _$httpBackend_, _$rootScope_) {
            $rootScope = _$rootScope_ ;
            $scope = $rootScope.$new();
            _$controller_("ModelsCtrl", {
                $scope: $scope
            });
            _$httpBackend_.whenGET(modelsPath).respond({models: dummyModels});
            _$httpBackend_.flush();
        }));

        it('Testing loading models into scope from mocked http request', function() {
            chai.expect($scope.items.length).to.equal(1);
            chai.expect($scope.items[0]).to.eql(dummyModels[0]);
        });
    });

    describe('Testing model creation', function() {

        var testInputField = {
            name: "austen",
            urls: "https://ia600504.us.archive.org/25/items/thecompleteproje31100gut/31100.txt"
        };

        var expectedModelData ={
            name: "austen",
            urls: ["https://ia600504.us.archive.org/25/items/thecompleteproje31100gut/31100.txt"]
        };

        beforeEach(inject(function (_$controller_, _modelActions_) {
            $scope = {};
            modelActions = _modelActions_;
            _$controller_("ModelsModalCtrl", {
                $scope: $scope,
                $uibModalInstance: {}
            });
            sinon.spy(modelActions, "createModel");
        }));

        beforeEach(function(){
            $scope.fields = testInputField;
            $scope.ok();
        });

        it('Testing if model is created with given arguments', function() {
            chai.expect($scope.fields.nameEmpty).to.false;
            chai.expect($scope.fields.urlsEmpty).to.false;
            chai.expect(modelActions.createModel.calledOnce).to.true;
            chai.expect(modelActions.createModel.getCall(0).args[0]).to.eql(expectedModelData);
        });
    });

    describe('Testing default values for query', function() {

        beforeEach(inject(function (_$controller_) {
            _$controller_("QueriesModalCtrl", {
                $scope: $scope,
                models: dummyModels,
                $uibModalInstance: {}
            });
        }));

        it('Default query must be empty', function() {
            chai.expect($scope.fields.word).to.equal("");
        });
    });

    describe('Testing query loading', function() {

        var dummyQueryData = {
            queries:[{
                id: 2,
                model: dummyModels[0].id,
                modelName: dummyModels[0].name,
                results:[]
            }]
        };

        beforeEach(inject(function (_$controller_, _$httpBackend_) {
            _$controller_("QueriesCtrl", {
                $scope: $scope,
                models: dummyModels,
                $uibModalInstance: {}
            });
            _$httpBackend_.whenGET(queriesPath).respond(dummyQueryData);
            _$httpBackend_.flush();
        }));

        it('Testing loading queries into scope from mocked http request', function() {
            chai.expect($scope.items.length).to.equal(1);
            chai.expect($scope.items[0]).to.eql(dummyQueryData.queries[0]);
        });
    })

    describe('Testing query creation', function() {

        var expectedQueryData = {
            word: 'test',
            model: dummyModels[0].id
        };

        beforeEach(inject(function (_$controller_, _queryActions_) {
            queryActions = _queryActions_;
            _$controller_("QueriesModalCtrl", {
                $scope: $scope,
                models: dummyModels,
                $uibModalInstance: {}
            });
            sinon.spy(queryActions, "createQuery");
        }));

        beforeEach(function(){
            $scope.fields.word = "test";
            $scope.ok();
        });

        it('Testing if model is created with given arguments', function() {
            chai.expect($scope.fields.wordEmpty).to.false;
            chai.expect(queryActions.createQuery.calledOnce).to.true;
            chai.expect(queryActions.createQuery.getCall(0).args[0]).to.eql(expectedQueryData);
        });
    });
});
