var number = 12;

(function (n) {
  var apple = 'alma';
  n++;
  console.log(apple + n);
})(number)

console.log(number);

var a = (function() {
  return 'alma';	
})();
console.log(a);



var array = [];

for (var i = 0; i < 5; i++) {
  array[i] = (function(i) {
	return function() {
	  console.log(i);
	};
  })(i);
}

array[0]();
array[1]();
array[2]();
array[3]();
array[4]();





var arrayForEach = [0, 1, 2, 3, 4].map(function(e) {
  return function() {
	console.log(e);  
  };
});

arrayForEach[0]();
arrayForEach[1]();
arrayForEach[2]();
arrayForEach[3]();
arrayForEach[4]();
