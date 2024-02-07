// async function works in background

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3500);
  });
}

// console.log("Loading Modules");

// console.log("Do something else");

// console.log("Load Data");
// let data = getData();

// console.log("Process Data");

//When we used async func the above code will run immediately and the getData() func will run in background.
//If we want to stop that we can use "await" by wrapping all the above code in another  (async) function.Here are the steps:

async function main() {
  console.log("Loading Modules");

  console.log("Do something else");

  console.log("Load Data");
  let data = await getData(); //Use of await: await will stop the execution of underlying data until the getData() function is resolved.

  console.log("Process Data"); //This will execute after 3.5 second
}
main()