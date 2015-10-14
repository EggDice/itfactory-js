'use strict';

var button = document.getElementById('submit');
var numberInput = document.getElementById('number');
var playerInput = document.getElementById('player');
var lastPlayer = document.getElementById('lastPlayer');
var bestPlayer = document.getElementById('bestPlayer');

button.addEventListener('click', function() {
  var url = '/play/' + playerInput.value + '/' + numberInput.value
  $.ajax({
	method: 'GET',
	url: url
  });
  updatePlayers();
});

function updatePlayers() {
  $.ajax({
	method: 'GET',
	url: '/player/last',
	success: function(response) {
		lastPlayer.innerHTML = response.lastPlayer;
	}
  });
  $.ajax({
	method: 'GET',
	url: '/player/best',
	success: function(response) {
		bestPlayer.innerHTML = response.bestPlayer;
	}
  });
}

updatePlayers();
setInterval(updatePlayers, 3000);


