var http = require('http');

var server = http.createServer(function(req, res) {
	console.log('incoming request');
	res.end('Hello!');
});

server.listen(8080);