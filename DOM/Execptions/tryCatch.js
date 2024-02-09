let a = prompt("Enter the first number:")

let b = prompt("Enter the second number:")

let sum = parseInt(a) + parseInt(b);


//x is not defined so it shows an error
try {
    console.log("The sum is ", sum*x);
    
} catch (error) {
    console.log("Nhi hogaa; define kr")
}
