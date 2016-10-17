'use strict';

/**
 * @ngdoc function
 * @name phylogeneticTreesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the phylogeneticTreesApp
 */
angular.module('phylogeneticTreesApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.click = function(id){
      var header = document.getElementById("treeGenOptionHeader");
      header.style.display = "";

      var homeHeaderTitle = document.getElementById("homeHeader");
      homeHeaderTitle.style.display = "";

      var loginHeaderButton = document.getElementById("loginHeader");
      loginHeaderButton.style.display = "none";

      var btnLogin = document.getElementById("btnLogin");
      btnLogin.style.display = "none";

      var mainTitle = document.getElementById("mainTitle");
      mainTitle.innerText = "Welcome back!";

      var loginModal = document.getElementById("loginModal");
      loginModal.style.display = "none";

    };

    // Get the modal
    var modal = document.getElementById('loginModal');

    // Get the button that opens the modal
    var btn = document.getElementById("btnLogin");
    var btnHeader = document.getElementById("loginHeaderBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    };

    btnHeader.onclick = function() {
      modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };

  });
