var timeout = setTimeout(function() {
	console.log('Hello from the future!');
}, 5000);

setTimeout(function() {
  clearTimeout(timeout);
}, 3000);