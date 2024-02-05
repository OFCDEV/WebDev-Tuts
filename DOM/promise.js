//Solution to callback hell is called Promise
//It takes two func as parameter; "resolve" and "reject" and an arrow function which executes code if one of them is executed

console.log("This is promise");

// let prom1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Execution Completed");
//     resolve("devV");
//   }, 3000);
// });

// prom1.then((a)=>{
//     console.log(a);
    
// })
//.then is used to check what happend after prom1 is executed; here I printed the value of resolve which is devV by conslog.log(a)

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else{
        setTimeout(() => {
          console.log("Execution Completed");
          resolve("devV");
        }, 3000);
    }
  });
  
  prom1.then((a)=>{
      console.log(a);
      
  })
