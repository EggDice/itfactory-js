'use strict';

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var HORIZONTAL = 0;
var VERTICAL = 1;
var MARGIN = 20;
var GAME_WIDTH = 400;
var GAME_HEIGHT = 300;
var MAX_OBSTICLE_SIZE = 60;
var OBSTACLE_COUNT = 60;

var obstacles = [];

for (var i = 0; i < OBSTACLE_COUNT; i++) {
	obstacles.push(createRandomObstacle());
}

canvas.addEventListener('mousemove', function(event) {
	context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	
	var winning = obstacleFactory(190, 140, 20, 20);
	

	
	obstacles.forEach(function(o) {
		o.draw(context);
	});
	
	winning.draw(context, 'green');
	
	if (winning.isUnderPosition([event.offsetX, event.offsetY])) {
		alert('You have won!');
		return;
	}
	
	var isCollision = obstacles.some(function(o) {
		return o.isUnderPosition([event.offsetX, event.offsetY]);
	});
	
	if (isCollision) {
		alert('game over');
	}
	
	
	
	context.fillStyle = 'red';
	context.fillRect(event.offsetX - 10, event.offsetY - 10, 20, 20);
});

function createRandomObstacle() {
	var width = Math.round(Math.random() * MAX_OBSTICLE_SIZE);
	var height = Math.round(Math.random() * MAX_OBSTICLE_SIZE);
	var x = MARGIN + Math.round(Math.random() * (GAME_WIDTH - width - 2 * MARGIN));
	var y = MARGIN + Math.round(Math.random() * (GAME_HEIGHT - height - 2 * MARGIN));
	
	return obstacleFactory(x, y, width, height);
}

