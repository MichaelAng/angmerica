'use strict';

/**
 * @ngdoc overview
 * @name angmericaApp
 * @description
 * # angmericaApp
 *
 * Header module of the application.
 */
angular.module('header.module')
  .directive('mainHeader', function(){
    return {
      name: 'header',
      restrict: 'A',
      templateUrl: 'components/header/header.view.html',
    };
  });
