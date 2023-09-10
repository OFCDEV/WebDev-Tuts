function fibonacciSeries(n) {
    var output = [];

    if(n === 1){
        output = [0];
    }
    else if(n === 2){
        output = [0,1];
    }
    else{
        for(var i =0; i<n ; i++){
            output = output.push(output[output.length-2] + output[output.length-1]);
        }
    }
    return output;
}

output = fibonacciSeries(5);
console.log(output);