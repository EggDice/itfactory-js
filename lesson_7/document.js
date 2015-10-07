document.body.addEventListener('click', function(event) {
	if (event.target.classList.contains('name')) {
		var quantityElement = event.target.parentElement.querySelector('.quantity');
		var quantity = quantityElement.innerHTML;
     	quantityElement.innerHTML = Number(quantity) + 1;
	}
});