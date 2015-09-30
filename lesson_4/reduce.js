var array = [1, 2, 3, 4, 5];

var outputFor = 0;

for (var i = 0; i < array.length; i++) {
	outputFor += array[i];
}
console.log(outputFor);



var outputForEach = 0;
array.forEach(function(e) {
   outputForEach += e;
});
console.log(outputForEach);


console.log(array.reduce(function(acc, e) {
	return acc + e;
}, 0));


console.log(array.reduce(function(acc, e) {
	return acc + e;
}));


console.log(array.reduce((acc, e) => acc + e));