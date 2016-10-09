'use strict';

/**
 * @ngdoc overview
 * @name phylogeneticTreesApp
 * @description
 * # phylogeneticTreesApp
 *
 * Main module of the application.
 */
angular
  .module('phylogeneticTreesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/TreeGeneration', {
        templateUrl: 'views/treegeneration.html',
        controller: 'TreegenerationCtrl',
        controllerAs: 'TreeGeneration'
      })
      .when('/FileUpload', {
        templateUrl: 'views/fileupload.html',
        controller: 'FileuploadCtrl',
        controllerAs: 'FileUpload'
      })
      .when('/FileDownload', {
        templateUrl: 'views/filedownload.html',
        controller: 'FiledownloadCtrl',
        controllerAs: 'FileDownload'
      })
      .when('/FileList', {
        templateUrl: 'views/filelist.html',
        controller: 'FilelistCtrl',
        controllerAs: 'FileList'
      })
      .when('/FileSelection', {
        templateUrl: 'views/fileselection.html',
        controller: 'FileselectionCtrl',
        controllerAs: 'FileSelection'
      })
      .when('/GeneratedTree', {
        templateUrl: 'views/generatedtree.html',
        controller: 'GeneratedtreeCtrl',
        controllerAs: 'GeneratedTree'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/Login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'Login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
