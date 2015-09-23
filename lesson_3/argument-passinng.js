var outerNumber = 1;

function incrementNumber(number) {
  number++;
  console.log(number, 'in the function');
}


incrementNumber(outerNumber);
console.log(outerNumber, 'outside');


var outerObj = {number: 1};

function incrementObject(obj) {
  obj.number++;
  console.log(obj.number, 'in the function');
}

incrementObject(outerObj);
console.log(outerObj.number, 'outside');


var outerArr = [1];

function incrementArray(arr) {
  arr[0]++;
  console.log(arr[0], 'in the function');
}

incrementArray(outerArr);
console.log(outerArr[0], 'outside');