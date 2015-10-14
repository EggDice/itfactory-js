'use strict';

var lastPlayer = '';
var guesses = [];

function getLastPlayer() {
	return lastPlayer;
}

function submitPlayersGuess(playerName, number) {
	lastPlayer = playerName;
	guesses.push({
		playerName: playerName,
		number: number
	});
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

module.exports = {
	getLastPlayer: getLastPlayer,
	submitPlayersGuess: submitPlayersGuess,
	getBestPlayer: getBestPlayer
};
