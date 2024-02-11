
//commonJS uses "require" to import modules i,e  Synchronous type
// const http = require('node:http');

//After es6 we can use type:"module" to import modules
import http from "http"

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World my channge');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});