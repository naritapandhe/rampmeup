// 'use strict';

// var phonecatApp = angular.module('myApp.view2', ['ui.router'])

// // .config(['$routeProvider', function($routeProvider) {
// //   $routeProvider.when('/view2', {
// //     templateUrl: 'view2/view2.html',
// //     controller: 'View2Ctrl'
// //   });
// // }]);

// // Define the `PhoneListController` controller on the `phonecatApp` module
// phonecatApp.controller('View2Ctrl', function PhoneListController($scope) {
//   $scope.phones = [
//     {
//       name: 'Nexus S',
//       snippet: 'Fast just got faster with Nexus S.'
//     }, {
//       name: 'Motorola XOOM™ with Wi-Fi',
//       snippet: 'The Next, Next Generation tablet.'
//     }, {
//       name: 'MOTOROLA XOOM™',
//       snippet: 'The Next, Next Generation tablet.'
//     }
//   ];
// });

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

angular.module('myApp.view2', ['ui.router'])

// .config(['$stateProvider', function($stateProvider) {
//   $stateProvider('/view1', {
//     templateUrl: 'view1/view1.html',
//     controller: 'View1Ctrl',
//   });
// }])


.controller('View2Ctrl', ['$window','$scope','myAppFactory', function($window,$scope,myAppFactory) {
    $scope.data = myAppFactory.get();

    console.log('in view2');
    console.log($scope.data);

  //   $scope.data = [
  //   {
  //     name: 'Nexus S',
  //     snippet: 'Fast just got faster with Nexus S.'
  //   }, {
  //     name: 'Motorola XOOM™ with Wi-Fi',
  //     snippet: 'The Next, Next Generation tablet.'
  //   }, {
  //     name: 'MOTOROLA XOOM™',
  //     snippet: 'The Next, Next Generation tablet.'
  //   }
  // ];
  
}])

