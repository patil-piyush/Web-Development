// For Dice Number 1
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "./images/" + randomDiceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);


// For Dice Number 2
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var randomDiceImage2 ="dice" + randomNumber2 + ".png";
var randomImageSource2 = "./images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

//for heading 

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!! 🏳";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}