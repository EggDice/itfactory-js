'use strict';

var express = require('express');

var app = express();

var number = 42;
var lastPlayer = '';

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index', {});
});

app.get('/play/:player/:number', function(req, res) {
	number = req.params.number;
	lastPlayer = req.params.player;
	res.send('');
});

app.get('/player/last', function(req, res) {
	res.send({
		lastPlayer: lastPlayer
	});
});

app.listen(8080);