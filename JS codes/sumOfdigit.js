// function sumOfDigit(num) {
//     let p = 0;
//     while (num>0) {
//         p = (p*10) + num%10;
//         num/10;
//     }
//     return p;
// }
// res = sumOfDigit(432);
// console.log(res);
function sumOfDigit(num) { 
	let numStr = num.toString(); 
	let sum = 0; 

	for (let digit of numStr) { 
		sum += parseInt(digit); 
	} 

	return sum; 
} 

console.log(sumOfDigit(738));


// function sum(a,b){
//     console.log(a + b);
// }
// sum(6,9);