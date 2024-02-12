import express from "express";

import blog from './routes/blog.js';
import about from './routes/about.js';
import shop from './routes/shop.js';


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use('/blog', blog)
app.use('/about', about)
app.use('/shop', shop)

app.get("/", (req, res) => {
  console.log("Its a get rqst");
  res.send("Hello World from postman");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})