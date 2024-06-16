//you have to take a string from user as input and take the certain part of the string as tweet 
//tell the user that they are exciding the limit and show them their part of tweet that they can post in alert box

//write the code below this line

var tweet = prompt("enter your tweet upto 140 characters : ");
alert("Your tweet is : " + tweet.slice(0,140));

// or 

alert("Your tweet is : " + prompt("enter your tweet upto 140 characters : ").slice(0,140));