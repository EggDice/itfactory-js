function pow(number, exponent) {
  if (exponent === 0) {
	return 1;
  }
  var output = number;
  for (var i = 1; i < exponent; i++) {
	output *= number;
  }
  return output;
}

console.log(pow(3, 2));
console.log(pow(2, 10));
console.log(pow(2, 0));