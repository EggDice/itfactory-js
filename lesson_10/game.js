'use strict';

var save = require('./save-game');

var lastPlayer = '';
var guesses = [];

save.loadEntries(function(err, entries) {
	guesses = entries;
});

function getLastPlayer() {
	return lastPlayer;
}

function submitPlayersGuess(playerName, number) {
	lastPlayer = playerName;
	var entry = {
		playerName: playerName,
		number: number
	};
	guesses.push(entry);
	save.addEntry(entry);
}

function getBestPlayer() {
	guesses.sort(function(a, b) {
		return a.number - b.number;
	});
    for (var i = 0; i < guesses.length; i++) {
		var currentNumber = guesses[i].number;
		var currentGuesses = guesses.filter(function(e) {
			return e.number === currentNumber;
		});
		if (currentGuesses.length === 1) {
			return guesses[i].playerName;
		}
	}
	return '';
}

function getAllGuesses() {
	return guesses;
}

module.exports = {
	getLastPlayer: getLastPlayer,
	submitPlayersGuess: submitPlayersGuess,
	getBestPlayer: getBestPlayer,
	getAllGuesses: getAllGuesses
};
