var app=angular.module('shoppingApp')
	.controller('HomeController',['$scope','ShoppingListItems',function($scope,ShoppingListItems){
		console.log("CONTROLLER LOADED")
		var home=$scope;
		home.items=ShoppingListItems.getList();
	}])
console.log("FINISHED")