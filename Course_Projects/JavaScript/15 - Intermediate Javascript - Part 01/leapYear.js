//conditions
//if year is divisible by 4 then it is a leap year
//if year is divisible by 100 then it is not a leap year
//if year is divisible by 400 then it is a leap year

function isLeap(year){
    if(year % 4 === 0){
        if(year % 100 === 0){
           if(year % 400 === 0){
                console.log("It is a leap year.");
            }
            else{
                console.log("Not a leap year.");
            } 
        }
        else{
           console.log("It is a leap year."); 
        }
    }
    else{
        console.log("Not a leap year.");
    }
}

var year = prompt("Enter the year ");
isLeap(year);