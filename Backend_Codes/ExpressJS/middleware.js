//Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

import express from "express";

import fs from "fs";

const app = express();
const port = 3000;

app.use(express.static("public"));

//Middleware syntax:
// app.use((req,res,next)=>{
//      console.log('1st one')
//      res.send('Hacked by Middleware1') This stops all the below methods
//     next()
// })
//next refers to upcoming middle ware; If you remove "next()" it wont call the next middle ware and the website stays in a waiting/loading state

//middleware 1 --Suppose it is used as a logger for our application
//In this middleware we save date when a user is logging and its method
app.use((req, res, next) => {
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n `)
    console.log(`${Date.now()} is a ${req.method}`);
    next();
  });

//middleware 2
app.use((req, res, next) => {
  console.log("2nd one");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello App");
});

app.get("/about", (req, res) => {
  res.send("This is about us page");
});

app.listen(port, () => {
  console.log(`My app listening on port ${port}`);
});
