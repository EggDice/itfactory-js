var rules = {
	'1': 'I',
	'4': 'IV',
	'5': 'V',
	'9': 'IX',
	'10': 'X',
	'40': 'XL',
	'50': 'L',
	'90': 'XC',
	'100': 'C',
	'400': 'CD',
	'500': 'D',
	'900': 'CM',
	'1000': 'M'
}

function roman(arabic) {
	if (!arabic) {
	  return '';
	}
	
	var numbers = Object.keys(rules).filter(function(n) {
		return Number(n) <= arabic;
	});
	
	var currentArabic = numbers.pop();
	var currentRoman = rules[currentArabic];
	
	return currentRoman + roman(arabic - currentArabic);
}

module.exports = roman;