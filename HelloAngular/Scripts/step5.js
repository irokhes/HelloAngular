/// <reference path="~/Scripts/angular.js"/>
var app = angular.module('myApp', []);

app.controller('TaskListCtrl', function($scope, $http) {
    loadData();

    function loadData() {
        $http.get("api/tasks").success(function (data) {
            $scope.tasks = data;
        });
    };

    $scope.refresh = function() {
        loadData();
    };
});
 
app.controller('NewTaskCtrl', function($scope, $http) {
    $scope.taskName = null;

    $scope.createTask = function () {
        var config = {
            headers: { "CommandType": "CreateTask" }
        };
        var data = { Name: $scope.taskName };
        $http.post('api/tasks', data, config).success(function(data, status, headers) {
            alert("Task added");
            $http.get(headers("Location")).success(function(data) {
                $scope.tasks.push(data);
            });
        });
    };
});