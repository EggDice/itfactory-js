var outer = 1;

console.log(outer);

if (true) {
  var innerIf = 1;
}

console.log(innerIf);

function func() {
  var innerFunc = 'innerFunc';
  console.log(innerFunc);
}

func();
// console.log(innerFunc); ERROR