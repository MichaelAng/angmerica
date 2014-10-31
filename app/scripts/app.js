'use strict';

/**
 * @ngdoc overview
 * @name angmericaApp
 * @description
 * # angmericaApp
 *
 * Main module of the application.
 */
angular
  .module('angmericaApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
