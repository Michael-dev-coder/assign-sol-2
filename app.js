(function(){
 'use strict';

 angular.module("ShoppingListCheckOff", [])
 .controller("ToBuyController", ToBuyController)
 .controller("AlreadyBoughtController", AlreadyBoughtController)
 .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

 ToBuyController.$inject = ['ShoppingListCheckOffService'];
 function ToBuyController(ShoppingListCheckOffService){
   var Buy = this;
   Buy.items = [
     {name : "Cookies", quantity : 5},
     {name : "Soft Drinks", quantity : 10},
     {name : "Orange Juice", quantity : 2},
     {name : "Chocolates", quantity : 20},
     {name : "Fruits", quantity : 2}
   ];
   Buy.moveItem = function(itemIdex) {
     ShoppingListCheckOffService.moveItem(itemIdex, Buy.items);
   };
 };

 AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
 function AlreadyBoughtController(ShoppingListCheckOffService){
   var Bought = this;
   Bought.items = ShoppingListCheckOffService.items;
 };

 function ShoppingListCheckOffService(){
   var ShoppingList = this;
   ShoppingList.items = [];
   ShoppingList.moveItem = function (itemIdex, arrayOfitems){
     var item = {
       name: "",
       quantity: ""
     };
     item.name = arrayOfitems[itemIdex].name;
     item.quality = arrayOfitems[itemIdex].quality;
     arrayOfitems.splice(itemIdex, 1);
     ShoppingList.items.push(item);
   };
 }

})();
