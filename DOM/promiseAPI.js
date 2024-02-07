//Promise API --> There are 6 static methods of promise class

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
      reject("No random number was not supporting you");
    } else {
      setTimeout(() => {
        console.log("Execution Completed");
        resolve("devV");
      }, 3000);
    }
  });
  let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
      reject("No random number was not supporting you 2");
    } else {
      setTimeout(() => {
        console.log("Execution Completed 2");
        resolve("devV 2");
      }, 1000);
    }
  });

  //1. Promise.all(promises)-->waits for all promises to resolve and returns the array of their results,If anyone fails,it becomes the error and all other results are ignored

  let p3 = Promise.all([prom1,prom2])
  p3.then((a)=>{
    console.log(a)
  }).catch((err)=>{console.log(err)});

  //2. Promise.allSettled(promises)-->wait for all promises to settle means it should be both resolve and reject ; returns the array of their results

  let p4 = Promise.allSettled([prom1,prom2])
  p4.then((a)=>{
    console.log(a)
  }).catch((err)=>{console.log(err)});

  //3. Promise.race(promises)-->Waits for the first promise to settle and its result/error becomes the outcome

  let p5 = Promise.race([prom1,prom2])
  p5.then((a)=>{
    console.log(a)
  }).catch((err)=>{console.log(err)});