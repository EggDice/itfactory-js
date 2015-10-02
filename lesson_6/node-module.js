console.log('Module', module.exports);
var five = require('five');

console.log(five.arabic());

function add(a, b) {
	return a + b;
}

function multiply(a, b) {
	return a * b;
}

module.exports = {
	add: add,
    multiply: multiply
};