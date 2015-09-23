var count = 0;

var counter = (function(c) {
  return function () {
	console.log(c);
	c++;
  }
})(count);

count = 234;

counter();
counter();
counter();
counter();
counter();

// console.log(count); ERROR