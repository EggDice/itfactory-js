'use strict';

var express = require('express');

var app = express();

app.use(function(req, res, next) {
	req.startTime = (new Date).getTime();
	next();
});

app.get('/', function(req, res, next) {
	setTimeout(function() {
		req.stopTime = (new Date).getTime();
		res.send('hello');
		next();
	}, 1000);
}, function(req, res, next) {
	console.log(req.startTime - req.stopTime);
});

app.get('/asdf', function(req, res) {
	res.send('hello adsf!');
});

app.listen(8080);