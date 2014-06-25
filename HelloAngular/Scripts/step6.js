/// <reference path="~/Scripts/angular.js"/>
var app = angular.module('myAppStep6', []);

app.controller('QuestionnaireCtrl', function ($scope) {
    $scope.questionnaire = [
        { number: 1, question: "How old are you?", type: "number" },
        { number: 1, question: "You date of birth?", type: "data" },
        { number: 1, question: "Describe yourself in a few words", type: "text" },
        { number: 1, question: "Which is your favorite colour?", type: "singleOption" },
        { number: 1, question: "Which of the following sweets do you like?", type: "multiOption" }
    ];
});
 
