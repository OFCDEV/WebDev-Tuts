import path from "path"

// console.log(path)
let myPath = "C:\\Users\\debas\\WebDev-Tuts\\Backend_Codes\\FS module\\dev.txt"
console.log(path.extname(myPath))   //shows extension name
console.log(path.dirname(myPath))   //show the directory in which that file is present
console.log(path.basename(myPath))  //filename

//Mehtod to add file to a folder
//console.log(path.join("c:\\","programs\\dev.txt")) 