// Création d'un module angular du nom 'myApp'
var app = angular.module('myApp', []);
// Création d'un controller 'carCtrl'
app.controller('carCtrl', function($scope, $http) {
  // http.get permet de récup des données (data) extérieures
  $http.get("voiture.json")
  .then(function(response) {
    // reponse.data renvoie le contenu de voiture.json dans la variable marques
      $scope.marques = response.data;
    });
  });
