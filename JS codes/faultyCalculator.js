let random = Math.random();
alert(random);

let a = prompt("Enter the first number:");
let b = prompt("Enter the operation:");
let c = prompt("Enter the second number:");

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if (random > 0.1) {
    //Do the right calculation
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}

else{
    //Do the wrong calculation
    b = obj[b];
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}