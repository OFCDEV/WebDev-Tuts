let a = prompt("Enter the first number:")

let b = prompt("Enter the second number:")

//promt passes a string; so if we want mathematical calculation we have to do typecasting
//If user by chance passed some string we have to give an error
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry This is not allowed.")
}

let sum = parseInt(a) + parseInt(b);

console.log("The sum is", sum);

