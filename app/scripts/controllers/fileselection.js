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
      // Now that you are moving to a more "professional" application you want to display errors or messages in a better way than just alert()
      alert(error);
    });

    $scope.selected = function(id) {

      if(selected.includes(id)){
        var index = selected.indexOf(id);
        selected.splice(index, 1);
        console.log(selected);
        var target = document.getElementById(id);
        target.style.color = 'black';
        var imgTarget = document.getElementById("img" + id);
        imgTarget.src = "images/treeFile.png"
        $scope.fileURL = "https://s3.amazonaws.com/phivhubstorage/";
        $scope.fileURL = $scope.fileURL+id;
        var btnDownload = document.getElementById("btnDownload");
        btnDownload.disabled = true;
      }
      else{
        selected.push(id);
        selected.forEach(unselect);
        console.log(selected);
        var target = document.getElementById(id);
        target.style.color = 'red';
        var imgTarget = document.getElementById("img" + id);
        imgTarget.src = "images/treeFileSelected.png"
        var btnDownload = document.getElementById("btnDownload");
        btnDownload.disabled = false;
      }

    }

    function unselect(item, index) {
      var target = document.getElementById(selected[index]);
      if(target.style.color === 'red' && index != selected.length - 1)
      {
        target.style.color = 'black';
        var imgTarget = document.getElementById("img" + selected[index]);
        imgTarget.src = "images/treeFile.png"
      }
    }

    $scope.uploadedFile = function(element){
      $scope.$apply(function($scope){
        $scope.files = element.files;
      })
    };

    $scope.addFile = function(){
      $scope.uploadFile($scope.files)
    };

    $scope.uploadFile = function(files){
      for(var i = 0; i < files.length; i++){
        var formData = new FormData();
        var file = files[i];
        console.log(file);
        var key = file.name;
        var type = file.type.replace('/', '%2F');
        formData.append(key, file);
        $.ajax({
          type: "GET",
          url: signedUrlEndpoint + key + '/multipart%2Fform-data'
        }).done(
          function(getResponse){
            console.log(getResponse);
            $.ajax({
              type: "PUT",
              url: getResponse,
              data: formData,
              processData: false,
              contentType: "multipart/form-data",
              transformRequest: angular.identity
            }).done(
              function(putResponse){
                console.log(putResponse);
              })
          })
      }
    };

    $('input:file').change(
      function(e){
        var fileLabel = document.getElementById("fileNameLabel");
        fileLabel.innerHTML = e.target.files[0].name;

        var upload = document.getElementById("fileUploadInput");
        upload.disabled = false;
      });

  });

