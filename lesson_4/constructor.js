function Car(type, color, km) {
  this.type = type;
  this.color = color;
  this.km = km;
  this.ride = ride;
}

function ride(journeyLength) {
  this.km += journeyLength;
}


var skoda = new Car('Skoda', 'purple', 1000);
skoda.ride(230);
console.log(skoda.km);

var lada = new Car('Lada', 'oceanblue', 180000);
lada.ride(8880);
console.log(lada.km);