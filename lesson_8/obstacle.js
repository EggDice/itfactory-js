'use strict';

function obstacleFactory(x, y, width, height) {
	var size = [width, height];
	var position = [x, y];
	
	function draw(context) {
		context.fillStyle = 'black';
		context.fillRect(
			position[HORIZONTAL],
			position[VERTICAL], 
			size[HORIZONTAL],
			size[VERTICAL]
		);
	}
	
	function isUnderPosition(mousePosition) {
		return mousePosition[HORIZONTAL] > position[HORIZONTAL] &&
			mousePosition[HORIZONTAL] < position[HORIZONTAL] + size[HORIZONTAL] &&
			mousePosition[VERTICAL] > position[VERTICAL] &&
			mousePosition[VERTICAL] < position[VERTICAL] + size[VERTICAL];
	}
	
	return {
		draw: draw,
		isUnderPosition: isUnderPosition
	};
}