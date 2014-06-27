'use strict'
describe("Testing the controller 'SampleCtrl'", function(){
	beforeEach(module("sampleApp"));

	var sampleCtrl, scope;
	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope;
		sampleCtrl = $controller("SampleCtrl",{
			$scope: scope
		});
	}));

	it("should say hello", function(){
		expect(scope.hello).toBe("Hello tu!!");
	})
});