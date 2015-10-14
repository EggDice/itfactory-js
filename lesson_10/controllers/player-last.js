'use strict';

var game = require('../game');

module.exports = function(app) {
	app.get('/player/last', function(req, res) {
		res.send({
			status: 'ok',
			lastPlayer: game.getLastPlayer()
		});
	});
}