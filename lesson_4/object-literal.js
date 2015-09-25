var car = {
  type: 'Skoda',
  color: 'purple',
  km: 1000,
  ride: ride
};

function ride(journeyLength) {
  this.km += journeyLength;
}


car.ride(60);
console.log(car.km);