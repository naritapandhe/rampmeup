'use strict';

angular.module('myApp.view1', ['ui.router'])


.controller('View1Ctrl', ['$window','$scope','myAppFactory', function($window,$scope,myAppFactory) {
    $scope.master = {};
    $scope.todoInput='';
    $scope.todoList = [
      {todoText:'Set up weekly 1:1 with your manager', done:false},
      {todoText:'Make sure you are in certain Distribution Groups (DGs) and Security Groups(SGs) on http://idweb', done:false},

      {todoText:'Request calendar invitation of recursive meetings from your manager and/or dev lead', done:false},
      
    ];

    $scope.todoAdd = function(user) {
        $scope.todoList.push({todoText:user.todoInput, done:false});
        $scope.todoInput = "";
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.gotoNext = function(user) {
        $scope.master = angular.copy(user);
        myAppFactory.set(user);
        $window.location.href = '/index.html#/view2?slide=1';
        // $state.go('view2');
      }

      $scope.reset();
    
  
  }])

