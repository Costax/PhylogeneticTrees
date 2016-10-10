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
    // Remove this code. Remove from the test files as well or it will break your build.
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var selected = [];
    $scope.fileURL = "https://s3.amazonaws.com/phivhubstorage/";

    // Ideally you will have an angular sevice where you will put all this call to external dependencies. This service then can be injected in any controller for reusability.
    // You want to be more standard in your names/code (right now you have lower case with dash in the first part, then came case
    $http.get("https://l5i4ol6g4h.execute-api.us-east-1.amazonaws.com/dev/phivhub-lambdas-readStorageBucket/phivhubstorage")
      .success(function (data) {
        // Variables should have a more descriptive name. "myApi" does not really represent the content of the variable.
        $scope.myApi = data;
      }).error(function (error) {
      // Now that you are moving to a more "profesional" application you want to display errores or messages in a better way than just alert()
      alert(error);
    });

    $scope.selected = function(id) {
      $scope.fileURL = $scope.fileURL+id;
      if(selected.includes(id)){
        var index = selected.indexOf(id);
        selected.splice(index, 1);
        console.log(selected);
        var target = document.getElementById(id);
        target.style.color = 'black';
      }
      else{
        selected.push(id);
        console.log(selected);
        var target = document.getElementById(id);
        target.style.color = 'red';
      }

    }

  });

