for (var i = 0; i < 5; i++) {
  console.log(i);
}

var array = ['morzsi', 'zsemle', 'tappancs'];

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

var obj = {a: 1, b: 2, c: 3};

for (var key in obj) {
  console.log(key);
  console.log(obj[key]);
}

for (var value of [1, 2, 3]) {
  console.log(value);
}