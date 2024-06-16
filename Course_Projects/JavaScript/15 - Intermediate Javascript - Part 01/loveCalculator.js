console.log("Welcome to our webpage which will help you to calculate your love score");
var girl = prompt("enter the name of girl ");
var boy = prompt("enter the name of boy ");

var n = Math.random();
n = (n * 100);
var percentage = Math.round(n) + 1;
console.log("congratulations " + girl + " & " + boy);
console.log("Your Love score is " + percentage + "%");