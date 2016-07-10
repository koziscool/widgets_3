
var widgets = angular.module('widgets', []);

widgets.controller( 'RestaurantCtrl', 
  ['$scope', function($scope){

    $scope.restaurants = [];

    $scope.processForm = function() {
      console.log("here");
      var newRestaurant = {};

      newRestaurant.name = $scope.formData.name;
      newRestaurant.foodType = $scope.formData.type;

      $scope.restaurants.push( newRestaurant );
    };

  }]);

