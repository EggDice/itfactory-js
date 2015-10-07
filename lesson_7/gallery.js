'use strict';

var imageFiles = [
  'majom_1.jpg',
  'majom_2.jpg',
  'majom_3.jpg',
  'majom_4.jpg'
];

var imageWrapper, prev, next, currentIndex, img;

init();
document.body.addEventListener('click', function(event) {
	setCurrentIndexBasedOnDirection(event.target.id);
	setCurrentImage();
    disableButtonsOnEnds();
});

function init() {
	imageWrapper = document.getElementById('image-wrapper');
	prev = document.getElementById('prev');
	next = document.getElementById('next');

	currentIndex = 0;
	prev.setAttribute('disabled', 'disabled');

	img = document.createElement('img');
	setCurrentImage();
	imageWrapper.appendChild(img);
}

function setCurrentImage() {
	img.src = imageFiles[currentIndex];
}

function setCurrentIndexBasedOnDirection(direction) {
	if (direction === 'next') {	
	  currentIndex = Math.min(currentIndex + 1, imageFiles.length - 1);
	} else if (direction === 'prev') {
	  currentIndex = Math.max(currentIndex - 1, 0);
	}
}

function disableButtonsOnEnds() {
	addAttributeOnIndex(prev, 0);
	addAttributeOnIndex(next, imageFiles.length - 1);
}

function addAttributeOnIndex(button, index) {
	if (currentIndex === index) {
		button.setAttribute('disabled', 'disabled');
	} else {
		button.removeAttribute('disabled');
	}
}