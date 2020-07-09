function Search(id, callback) {
	// const $app = document.getElementById(id);
	// const $div = document.createElement('div');
	// $div.innerHTML = `<input id ="search" type="text"/>`;
	// $app.appendChild($div);
	document.getElementById('search').addEventListener('keyup', (e) => {
		callback(e.target.value);
	});
}

export { Search };