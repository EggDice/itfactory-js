var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hi');
  console.log('incoming request');
});

server.listen(8080, '127.0.0.1');
