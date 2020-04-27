(function () {
'use strict';

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

var app = angular.module('myApp', [])
app.controller('ShoppingListController', ShoppingListController);
app.config(['$interpolateProvider', function($interpolateProvider) {
		  $interpolateProvider.startSymbol('{a');
		  $interpolateProvider.endSymbol('a}');
		}]);


ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  $scope.shoppingList = shoppingList;
}

})();

