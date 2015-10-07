$('body').click(function(event) {
	var $target = $(event.target);
	if ($target.hasClass('name')) {
		var $quantity = $target.parent().find('.quantity');
		var q = $quantity.text();
		$quantity.text(Number(q) + 1);
	}
});