'use strict';

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var HORIZONTAL = 0;
var VERTICAL = 1;

canvas.addEventListener('mousemove', function(event) {
	context.clearRect(0, 0, 400, 300);
	
	var obstacle = obstacleFactory(50, 50, 100, 50);
	
	obstacle.draw(context);
	
	context.fillStyle = 'red';
	if (obstacle.isUnderPosition([event.offsetX, event.offsetY])) {
		alert('game over');
	}
	
	context.fillRect(event.offsetX - 10, event.offsetY - 10, 20, 20);
});

