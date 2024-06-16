function getMilk() { 
console.log("leaveHouse");
console.log("moveRight");
console.log("moveRight");
console.log("moveUp");
console.log("moveUp");
console.log("moveUp");
console.log("moveUp");
console.log("moveRight");
console.log("moveRight");

//let one bottle of milk costs 1.5 $
var bottles = money / 1.5;
bottles = Math.floor(bottles);
console.log("the number of bottles you can buy is : " + bottles );

console.log("moveLeft");
console.log("moveLeft");
console.log("moveDown");
console.log("moveDown");
console.log("moveDown");
console.log("moveDown");
console.log("moveLeft");
console.log("moveLeft");
console.log("enterHouse");
}

var money = prompt("enter the amount of money you have to buy the milk bottles");
getMilk(money);