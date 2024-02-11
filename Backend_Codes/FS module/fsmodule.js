import fs from "fs" //ES

//const fs = require("fs") //CommonJS

// console.log(fs)

//Uses of fs module:
console.log("Starting...") //1st this excutes
fs.writeFileSync("dev.txt","I am a good boy") //Then after it,(Asynchronous Approach)

fs.writeFile("dev2.txt","I am a good boy2",()=>{
    console.log("done");
    //to read file:
    fs.readFile("dev2.txt",(error,data)=>{
        console.log(error,data.toString())
    }) //The callback function takes two parameters; one is error and another is data(which we have to convert into string)
})

//append text in a file:
fs.appendFile("dev2.txt"," phir se agya",(error,data)=>{
    console.log(data)
    //It takes three parameter; one is filepath/filename, second is text and lastly a callback function
})

console.log("Ending...") // After the txt file is being created, this code will execute