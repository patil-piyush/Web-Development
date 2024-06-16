function fibonacciGenerator(n){
    var count = 2;
    var arr = [];
    var n1 = 0;
    var n2 = 1;
    if(n === 1){
        arr = [0];
    }
    else if(n === 2){
        arr = [0,1];
    }
    else{
        while(count !== n){
            var n3 = n1 + n2;
            arr.push(n3);
            n1 = n2;
            n2 = n3;
            count++;
        }
    }
    return arr;
}