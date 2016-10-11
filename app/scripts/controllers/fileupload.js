var signedUrlEndpoint =
  "https://d8mld28cl9.execute-api.us-east-1.amazonaws.com/dev/phiv-signedurl/";

/**
 * @ngdoc function
 * @name phylogeneticTreesApp.controller:FileuploadCtrl
 * @description
 * # FileuploadCtrl
 * Controller of the phylogeneticTreesApp
 */
angular.module('phylogeneticTreesApp')
  .controller('FileuploadCtrl', function ($scope) {

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
  });
