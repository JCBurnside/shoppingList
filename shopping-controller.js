angular.module('shoppingApp')
	.controller('ShoppingListController',['$scope','ShoppingListItems',function($scope,ShoppingListItems){
		var shopList=$scope;
		shopList.items=ShoppingListItems.getList();
		shopList.addItem=function(newItem){
			shopList.items.push({
				name:shopList.newItem.name,
				qty:shopList.newItem.qty,
				priority:shopList.newItem.priority
				})
		};
		shopList.removeItem=function(item){
			var removeItem=shopList.items.indexOf(item);
			shopList.items.splice(removeItem,1);
		};
		shopList.removeAll=function(){
			shopList.items.splice(0);
			console.log(shopList.items,ShoppingListItems.getList())
		};
	}])