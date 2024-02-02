let arr = [1,2,3,4,5,6];
console.log(arr);   //Returns the array
console.log(arr.length);   //Returns the length of the array
console.log(arr.toString());   //Returns a string separated by comma
console.log(arr.join("and"));   //Returns the string separated by and
console.log(arr.pop());   //Returns the array and removes the last element
console.log(arr.push(599));   //Returns the array and add 599 at the end
console.log(arr.shift());   //Returns the array and remove the first element
console.log(arr.unshift("Hiee"));   //Returns the arrray and insert element in the first position
console.log(delete(a[1]));   //(Imp)Returns the arrray and delete element and put empty in its value (Number of array elements are still same)
//Concatation in Array
let arr2 = ["arr2",7,8,9];
let arr3 = ["arr3",10,11,12];
console.log(arr.concat(arr2,arr3))
//Sort (We can also pass arguments)
console.log(arr2.sort())
//Splice --> takes two parameters i,e a starting index and num of items it deletes
//Also we can add elements using slice by giving elements in three and next++ parameters
console.log(arr.splice(1,2))
console.log(arr.splice(1,2,233,444)) //removes 2 element from index1 and add 233 and 444
//Slice--> arr.slice(start,end)--> return an array with containing element between start and end