var count = 99;

function beer(){
    while(count >= 0){
        if(count === 1){
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer\n");
            console.log("Take one down and pass it around, no more bottles of beer on the wall.\n");
        }
        else if(count == 0){
            console.log("No more bottles of beer on the wall, no more bottles of beer\n");
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.\n");
        }
        else{
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer\n");
            console.log("Take one down and pass it around, " + (count - 1) + " bottles of beer on the wall.\n");
        }
        count--;
    }
}