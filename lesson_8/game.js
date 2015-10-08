var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var HORIZONTAL = 0;
var VERTICAL = 1;

canvas.addEventListener('mousemove', function(event) {
	context.clearRect(0, 0, 400, 300);
	
	
	var obstacle = {
		size: [100, 50],
		position: [50, 50]
	};
	
	drawObstacle(obstacle);
	context.fillStyle = 'red';
	
	if (isPositionOverObsticle([event.offsetX, event.offsetY], obstacle)) {
		alert('game over');
	}
	
	context.fillRect(event.offsetX - 10, event.offsetY - 10, 20, 20);
});

function drawObstacle(obstacle) {
	context.fillStyle = 'black';
	context.fillRect(
	  obstacle.position[HORIZONTAL],
	  obstacle.position[VERTICAL], 
	  obstacle.size[HORIZONTAL],
	  obstacle.size[VERTICAL]
	);
}

function isPositionOverObsticle(position, obstacle) {
	return position[HORIZONTAL] > obstacle.position[HORIZONTAL] &&
    	position[HORIZONTAL] < obstacle.position[HORIZONTAL] + obstacle.size[HORIZONTAL] &&
		position[VERTICAL] > obstacle.position[VERTICAL] &&
    	position[VERTICAL] < obstacle.position[VERTICAL] + obstacle.size[VERTICAL];
}