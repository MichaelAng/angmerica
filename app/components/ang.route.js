'use strict';

/**
 * @ngdoc overview
 * @name angmericaApp
 * @description
 * # angmericaApp
 *
 * Main module of the application.
 */
angular.module('angmericaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/main/main.view.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'components/about/about.view.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
