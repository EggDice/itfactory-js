function hello() {
  console.log('Szia!');
}

hello();
hello(123);
hello(123, 1, 2, 3, 15);


function printArguments(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

printArguments(1, 2, 3);
printArguments(1, 2);
printArguments();

console.log(1, 2, 3, 4, 5, 6, 7, 'macska');

function printArguments2() {
  console.log(arguments);
}

printArguments2('alma', 'korte', 'dinnye')

