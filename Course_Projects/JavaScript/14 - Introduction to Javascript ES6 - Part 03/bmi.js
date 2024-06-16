function bmiCal(weight, height){
    var result = (weight / (height * height))
    return Math.round(result);
}

var bmi = bmiCal(65, 1.8);
console.log(bmi);