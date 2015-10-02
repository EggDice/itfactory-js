var module2 = (function(m3) {
  var self = {};

  function add(a, b) {
	  return a + b;
  }
  
  function doubleNumber(a) {
	  return m3.multiply(a, 2);
  }

  var apple = 'alma';
  
  self.add = add;
  self.doubleNumber = doubleNumber;
  return self;
})(module3)