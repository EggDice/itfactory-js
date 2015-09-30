setImmediate(function() {
	console.log('immediate');
})

setTimeout(function() {
	console.log('0.1 second later');
}, 5000);

var count = 124512567;
function countDown() {
	if (count > 0) {
		count--;
		setImmediate(countDown);
	}
}
countDown();

console.log('end');