'use strict';

var game = require('./game');
var app = require('./app');

app.get('/', function(req, res) {
  res.render('index', {});
});

app.get('/play/:player/:number', function(req, res) {
	game.submitPlayersGuess(req.params.player, req.params.number);
	res.send({
		status: 'ok'
	});
});

app.get('/player/last', function(req, res) {
	res.send({
		status: 'ok',
		lastPlayer: game.getLastPlayer()
	});
});

app.get('/player/best', function(req, res) {
	res.send({
		status: 'ok',
		bestPlayer: game.getBestPlayer()
	});
});

app.listen(8080);
