'use strict';

var game = require('../game');
var config = require('../config');

module.exports = function(app) {
	app.get(config.routes.bestPlayer, function(req, res) {
		res.send({
			status: 'ok',
			bestPlayer: game.getBestPlayer()
		});
	});
}