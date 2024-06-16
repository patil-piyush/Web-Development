function main(){
   threeStep();
   twoStep();
   threeStep();
   twoStep();
   threeStep();
}

function threeStep(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   turnLeft();
}

function twoStep(){
   move();
   turnLeft();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   turnRight();
   move();
   turnRight();
}