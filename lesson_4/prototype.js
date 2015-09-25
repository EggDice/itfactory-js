function Animal(w) {
  this.weight = w;
}

var proto = {height: 1};

Animal.prototype = proto;

var dog = new Animal(40);

proto.height = 2;

console.log(dog.weight);
console.log(dog.height);



function Car(type, color, km) {
  this.type = type;
  this.color = color;
  this.km = km;
}

Car.prototype.ride = function (journeyLength) {
  this.km += journeyLength;
}


var skoda = new Car('Skoda', 'purple', 1000);
skoda.ride(230);
console.log(skoda.km);

var lada = new Car('Lada', 'oceanblue', 180000);
lada.ride(8880);
console.log(lada.km);
console.log(lada);