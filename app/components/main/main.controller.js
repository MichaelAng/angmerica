'use strict';

/**
 * @ngdoc function
 * @name angmericaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angmericaApp
 */
angular.module('angmericaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
