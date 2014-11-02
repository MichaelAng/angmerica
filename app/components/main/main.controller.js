'use strict';

/**
 * @ngdoc function
 * @name angmericaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angmericaApp
 */
angular.module('angmericaApp')
  .controller('mainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
