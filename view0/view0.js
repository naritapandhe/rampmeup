// 'use strict';

// angular.module('myApp.view1', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/view1', {
//     templateUrl: 'view1/view1.html',
//     controller: 'View1Ctrl',
//   });
// }])


// .controller('View1Ctrl', ['$window','$scope', function($window,$scope) {
//     $scope.master = {};

//       $scope.update = function(user) {
//         $scope.master = angular.copy(user);
//       };

//       $scope.reset = function() {
//         $scope.user = angular.copy($scope.master);
//       };

//       $scope.gotoNext = function() {
//         console.log('in gotonext');
//         $window.location.href = '/index.html#!/view2';
//         // $state.go('view2');
//       }

//       $scope.reset();
    
  
//   }])

'use strict';

    
angular.module('myApp.view0', ['ui.router'])

// .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
//     $urlRouterProvider.otherwise('/view0');
    
//     var view0State = {
//       name:'view0',
//       url:'/view0',
//       templateUrl: 'view0/view0.html',
//       controller: 'View0Ctrl'
//     }

//     $stateProvider.state(view0State);
// }])

.controller('View0Ctrl', ['$window','$scope','myAppFactory', function($window,$scope,myAppFactory) {
    $scope.data = {};
}]);