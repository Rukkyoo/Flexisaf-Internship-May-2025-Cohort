// index.js
const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World, this is my first Node.js server!');
  res.end();
}).listen(8080);

console.log("Server running at http://localhost:8080");






