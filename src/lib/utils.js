function debounce(cb, delay) {
	let timer = null;
	return (...args) => {
		clearInterval(timer);
		timer = setTimeout(() => cb(...args), delay);
	}
}
export { debounce };
