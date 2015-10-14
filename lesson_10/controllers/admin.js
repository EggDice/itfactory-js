'use strict';

var game = require('../game');

module.exports = function(app) {
	app.get('/admin', function(req, res) {
		res.render('admin', {
			guesses: game.getAllGuesses()
		});
	});
}