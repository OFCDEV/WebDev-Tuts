// let [x,y] = [1,2]
let [x,y,...rest] = [1,2,3,4,5,6,7,8,9]

console.log(x,y,rest);
// ... is known as spread operator
function sum(a,b,c){
    return a+b+c;
}
let arr = [1,4,6]
console.log(sum(arr[0],arr[1],arr[2]))
console.log(sum(...arr))


let arr2 = [1,2,3,4,5]
let obj = {...arr2}
console.log(obj)