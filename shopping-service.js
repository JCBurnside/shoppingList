angular.module('shoppingApp')
.factory('ShoppingListItems',function(){
	var items=[];
	function getList(){
		return items;
	}
	return {
		getList:getList
	}
})