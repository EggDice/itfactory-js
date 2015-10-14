'use strict';

var button = document.getElementById('submit');
var numberInput = document.getElementById('number');
var playerInput = document.getElementById('player');
var lastPlayer = document.getElementById('lastPlayer');

button.addEventListener('click', function() {
  var url = '/play/' + playerInput.value + '/' + numberInput.value
  $.ajax({
	method: 'GET',
	url: url
  });
  updateLastPlayer();
});

function updateLastPlayer() {
  $.ajax({
	method: 'GET',
	url: '/player/last',
	success: function(response) {
		lastPlayer.innerHTML = response.lastPlayer;
	}
  });
}
