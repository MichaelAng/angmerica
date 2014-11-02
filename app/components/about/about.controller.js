'use strict';

/**
 * Controller of the about.module App
 */

angular.module('about.module')
  .controller('aboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
