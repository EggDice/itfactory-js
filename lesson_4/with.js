var car = {type: 'Fiat', km: 123};

console.log(car.type);

var km = 12;

with (car) {
  console.log(km);
}