const app = require('http');
http.createServer(function (_, res) {
  res.write('Hello Holberton School!');
  res.end();
}).listen(1245);
module.exports = app;
