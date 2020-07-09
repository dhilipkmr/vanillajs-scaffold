function Sort(id, callback) {
	const $anchor = document.getElementById(id);
	const $arr = document.getElementById('arrival');
	const $dep = document.getElementById('depart');
	const $fast = document.getElementById('fast');
	[$arr, $dep, $fast].forEach((item) => {
		item.addEventListener('click', (e) => {
			callback(e);
		});
	});
}

export { Sort };