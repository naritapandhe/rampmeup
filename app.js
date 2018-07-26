'use strict';

// // Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version',
//   'ngSlidedeck',
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');

//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ui.router',
  'myApp.view0',
  'myApp.view1',
  'myApp.view2',
  'ngSlidedeck',
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
  var view0State = {
    name:'view0',
    url:'/view0',
    templateUrl: 'view0/view0.html',
    controller: 'View0Ctrl'
  }

  var view1State = {
    name:'view1',
    url:'/view1',
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  }

  var view2State = {
    name:'view2',
    url:'/view2',
    templateUrl: 'view2/view2.html'
  }

  $stateProvider.state(view0State);
  $stateProvider.state(view1State);
  $stateProvider.state(view2State);
  // $locationProvider.hashPrefix('!');

  // $urlRouterProvider.otherwise({redirectTo: 'view0'});
}]);

app.factory("myAppFactory", function() {
  var savedData = {};
  
  function set(data){
    savedData = data;
  }

  function get(){
    return savedData;
  }

  return {
    set: set,
    get: get
  }
})