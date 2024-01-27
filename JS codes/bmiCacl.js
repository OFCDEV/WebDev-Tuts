function bmiCalculator(weight , height) {
    var bmi = weight / Math.pow(height , 2);
    return Math.round(bmi); 
    //It gives us a round figure similar to Math.floor
}

console.log(bmiCalculator(50 , 1.67));