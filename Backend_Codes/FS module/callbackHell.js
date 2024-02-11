import fs from "fs" //ES

fs.writeFile("dev2.txt","I am a good boy2",()=>{
    console.log("done");
    fs.readFile("dev2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
    //Again
    fs.writeFile("dev2.txt","I am a good boy2",()=>{
        console.log("done");
        fs.readFile("dev2.txt",(error,data)=>{
            console.log(error,data.toString())
        })
        //Again
    })
    fs.writeFile("dev2.txt","I am a good boy2",()=>{
        console.log("done");
        fs.readFile("dev2.txt",(error,data)=>{
            console.log(error,data.toString())
        })
        //Again
    })
    fs.writeFile("dev2.txt","I am a good boy2",()=>{
        console.log("done");
        fs.readFile("dev2.txt",(error,data)=>{
            console.log(error,data.toString())
        })
        //Again
    })
    fs.writeFile("dev2.txt","I am a good boy2",()=>{
        console.log("done");
        fs.readFile("dev2.txt",(error,data)=>{
            console.log(error,data.toString())
        })
        //Again
    })
    fs.writeFile("dev2.txt","I am a good boy2",()=>{
        console.log("done");
        fs.readFile("dev2.txt",(error,data)=>{
            console.log(error,data.toString())
        })
        //Again
    })
    fs.writeFile("dev2.txt","I am a good boy2",()=>{
        console.log("done");
        fs.readFile("dev2.txt",(error,data)=>{
            console.log(error,data.toString())
        })
        //Again
    })
})