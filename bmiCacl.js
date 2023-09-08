function bmiCalculator(weight , height) {
    var bmi = weight / Math.pow(height , 2);
    return bmi;
}

console.log(bmiCalculator(50 , 1.67));