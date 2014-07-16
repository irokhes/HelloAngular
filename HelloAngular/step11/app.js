var app = angular.module('app',[]);

app.controller('SampleController', function($scope, $q){
	$scope.fail = false;
	$scope.test = function(){
		var deferred = $q.defer();

		var promise = deferred.promise;
		promise.then(function(result){
			alert('Success: ' + result);
		},
		function(reason){
			alert('Error: ' + reason);
		});

		if($scope.fail)
			promise.reject('fail!!');
		else
			promise.resolve('well done!!');
	};
});