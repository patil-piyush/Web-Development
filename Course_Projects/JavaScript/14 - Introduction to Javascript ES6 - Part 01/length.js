//take string from user as a input by using prompt and tell the user that how many characters they have written and how many characters they left by using lenght keyword  
//write your code below this line

var string = prompt("Enter the string : ");
var count = string.length;
console.log("you have written " + count + " characters, you have " + (280 - count) +" characters left.")