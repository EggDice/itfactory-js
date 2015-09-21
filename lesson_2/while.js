var number = 0;

while (number < 5) {
  console.log(number);
  number++;
}

number = 0;

while (number < 5) {
  if (number === 3) {
	break;
  }
  console.log(number);
  number++;
}

number = 0;

while (number < 5) {
  number++;
  if (number === 3) {
	continue;
  }
  console.log(number);
}