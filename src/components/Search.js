import Creator from "./Creator.js";
import { debounce } from '../lib/utils.js';

class Search extends Creator {
	constructor(cb) {
		super();
		this.searchBar = this.getElementById('searchbar');
		this.addListener();
		this.searchHandler = cb;
	}

	addListener = () => {
		const debouncedSearchHandler = debounce((e) => {
			const val = e.target.value;
			this.searchHandler(val);
		}, 200);
		this.searchBar.addEventListener('keyup', debouncedSearchHandler);
	}
}

export default Search;
