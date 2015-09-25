function add3(number) {
  return number + 3;
}

console.log(add3(8));


function generateAdder(baseNumber) {
  return function(number) {
    return number + baseNumber;
  };
}

var newAdder3 = generateAdder(3);
var newAdder5 = generateAdder(5);
console.log(newAdder3(5));
console.log(newAdder5(5));
console.log(newAdder5(15));