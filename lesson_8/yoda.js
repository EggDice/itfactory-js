'use strict';

var buttonElement = document.getElementById('submit');
var outputElement = document.getElementById('output');
var inputElement =  document.getElementById('english-input');
var loaderElement = document.getElementById('loading-gif');

buttonElement.addEventListener('click', function() {
	if (inputElement.value.length === 0) {
		alert('Please write a sentence');
	} else {
		console.log('Submiting text:', inputElement.value);
		outputElement.innerHTML = '';
		loaderElement.classList.remove('hidden');
		yodaRequest(inputElement.value, function(transletedText) {
			loaderElement.classList.add('hidden');
			outputElement.innerHTML = transletedText;
		});
	}
});
