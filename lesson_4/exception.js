
var number = 0;

try {
	JSON.parse('>');
    checkNumber()
} catch (e) {
	console.log(e.stack);
	number = 1;
}

console.log(5 / number);

function checkNumber() {
  if (number === 0) {
    throw new Error('Can\'t divide by zero!');
  }
}