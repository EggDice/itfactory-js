'use strict';

var game = require('../game');

module.exports = function(app) {
	app.post('/play/:player/:number', function(req, res) {
		game.submitPlayersGuess(req.params.player, req.params.number);
		res.send({
			status: 'ok'
		});
	});
}