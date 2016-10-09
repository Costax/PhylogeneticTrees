'use strict';

/**
 * @ngdoc function
 * @name phylogeneticTreesApp.controller:FileselectionCtrl
 * @description
 * # FileselectionCtrl
 * Controller of the phylogeneticTreesApp
 */
angular.module('phylogeneticTreesApp')
  .controller('FileselectionCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get("https://l5i4ol6g4h.execute-api.us-east-1.amazonaws.com/dev/phivhub-lambdas-readStorageBucket/phivhubstorage")
      .success(function (data) {
        $scope.myApi = data
      }).error(function (error) {
      alert(error);
    });

  });

