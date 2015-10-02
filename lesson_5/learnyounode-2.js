
/*
var output = process.argv
  .slice(2)
  .map(function(e) {
	  return Number(e);
  })
  .reduce(function(acc, e) {
	return acc + e;
  });
*/

var output = process.argv
  .slice(2)
  .map(e => Number(e))
  .reduce((acc, e) => acc + e);
	
console.log(output);