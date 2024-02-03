//map()--> Creates a new array by performing given operation on each array element

let a = [1, 2, 3, 4, 5, 6, 7];
let newArr = a.map((res) => {
    return res * res;
});
console.log(newArr);

//filter()-->Takes a function as input parameter

const greaterThenSeven = (e)=>{
    if(e>7){
        return true;
    }
    return false;
}
console.log(newArr.filter(greaterThenSeven));

//reduce()-->Takes a function as input and Returns a single value for a given array
const mul = (a,b)=>{
    return a*b
}
let mulArr = a.reduce(mul);
console.log(mulArr)

//Array.from()-->Converts a string into an array
console.log(Array.from("DevvV"));