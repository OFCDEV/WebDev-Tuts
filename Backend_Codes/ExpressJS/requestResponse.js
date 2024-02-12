//GET requests are thoese requests which we put in browser's URL
//POST requests are used send sensitive info like email/password or personal details etc

//In CommonJS mode, __dirname is a variable that contains the current file's directory. Many Node.js projects rely on this variable, but you can't use __dirname in ESM mode.So I imported it use at line-35
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("Its a get rqst");
  res.send("Hello World from postman");
});

app.post("/", (req, res) => {
  console.log("Its a get rqst");
  res.send("Hello World! post ");
});

app.put("/", (req, res) => {
  console.log("Its a put rqst");
  res.send("Hello World! put ");
});

//Method to send a html file/ some other file
app.get("/index", (req, res) => {
  console.log("Its a get rqst");
  res.sendFile("templates/index.html", { root: __dirname });
});
app.get("/api", (req, res) => {
  res.json({a:1,b:2,c:3,name:["devV"],name2:["hehe"]})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


//Sometimes it is getting hard to create new requests for url endlines like /,about,contact etc. This also makes the code file bigger, So to avoid this we will use routing using express