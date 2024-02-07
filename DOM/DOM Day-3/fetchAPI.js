async function getData() {
  // let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(x)
  //   return 455

//   let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   let data = await x.json();
//   return data;

  //   or
  //console.log(data);
  //This will take few seconds to execute and after this execution the "Process Data " line will execute

// Example POST method implementation:
let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json() 
    return data
}


// fetch API returns two promises; one is get the data and second is parse the data(here x.json() line) thats why we use two awaits.
//We can also parse the data in text format
//      let data = await x.text()

async function main() {
  console.log("Loading Modules");

  console.log("Do something else");

  console.log("Load Data");

  let data = await getData(); //Use of await: await will stop the execution of underlying data until the getData() function is resolved.

  //   let data = getData(); --> This will return a promise and underlying code will executed immediately
  console.log(data);

  console.log("Process Data"); //This will execute after 3.5 second
}
main();
