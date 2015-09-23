var osszead = function (a, b) {
  return a + b;
}

function hello() {}
// var hello = function() {}

console.log(osszead(1, 2));


function addText(text1, text2, addFn) {
  return addFn(text1, text2);
}

console.log(addText('alma', 'fa', osszead));

console.log(addText('alma', 'fa', function(a, b) {
  return a + b + '!';
}));


var array = [1, 2, 3, 4];

array.forEach(function(element, index, arr) {
  console.log(element, index, arr);
});

array.forEach(console.log);