'use strict';

/**
 * @ngdoc function
 * @name angmericaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angmericaApp
 */
angular.module('angmericaApp')
  .controller('aboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
