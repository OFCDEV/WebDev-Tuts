function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(455)  //455 is a random number
        },3500);
    })
}
console.log("Loading Modules");

console.log("Do something else");


console.log("Load Data");

let data = getData();
console.log(data);

data.then((v)=>{
    console.log(v) //It will give 455 as value(v)
})

console.log("Process Data");