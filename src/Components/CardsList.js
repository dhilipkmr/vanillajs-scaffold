function CardsList() {
	
}

CardsList.prototype.makeCards = function (id, items) {
	const $cardsHook = document.getElementById(id);
	const $div = document.createElement('div');
	$div.className = "flex cardWrap";
	items.forEach((item) => {
		$div.appendChild(this.createCard(item));
	});
	$cardsHook.innerHTML = '';
	$cardsHook.appendChild($div);
}

CardsList.prototype.createCard = function(a) {
	const $div = document.createElement('div');
	$div.className = 'card';
	return $div;
}

export { CardsList };