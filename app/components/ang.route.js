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
        controller: 'mainCtrl'
      })
      .when('/about', {
        templateUrl: 'components/about/about.view.html',
        controller: 'aboutCtrl'
      })
      .when('/resume', {
        templateUrl: 'components/resume/resume.view.html',
        controller: 'resumeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
