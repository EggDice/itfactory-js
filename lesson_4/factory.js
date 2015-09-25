function carFactory(type, color, km) {
  var km = km;

  function getKm() {
    return km;
  }
  
  function ride(journeLength) {
	km += journeLength;
  }
	
  return {
    color: color,
	type: type,
	getKm: getKm,
	ride: ride
  };
}

var skoda = carFactory('Skoda', 'purple', 1000);
var lada = carFactory('Lada', 'red', 188000);
skoda.ride(30);
console.log(skoda);
console.log(skoda.getKm());
console.log(lada.getKm());