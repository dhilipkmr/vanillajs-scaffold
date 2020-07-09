import { Search } from './Components/search.js';
import { Sort } from './Components/Sort.js';
import { CardsList } from './Components/CardsList.js';


class FoodOrdering { 
	constructor(id) {
		this.$app = document.getElementById(id);
		this.sort = Sort(id, this.handleSortClick);
		this.search = Search(id, this.searchKeyUp);
		this.cardsList = new CardsList();
		this.state = {
			cardsList: []
		}
		this.updateNewCards();
	}

	handleSortClick = (e) => { 
		console.log(e);
	}

	searchKeyUp = (val) => {
		console.log(val);
		if (val === 'd') {
			this.state = {
				cardsList: [{ name: 'Dhilip', rank: 2 }]
			};
			this.cardsList.makeCards('cardsList', this.state.cardsList);
		}
	}

	updateNewCards = () => {
		fetch('/something').then(() => Promise.resolve()).then(() => {
			this.state = {
				cardsList: [{ name: 'Dhilip', rank: 2 }, { name: 'Dhili6p', rank: 2 }, { name: 'D4hilip', rank: 2 }, { name: '2Dhilip', rank: 2 }, { name: '4Dhilip', rank: 2 }]
			};
			this.cardsList.makeCards('cardsList', this.state.cardsList);
		});
	}

}

document.addEventListener('DOMContentLoaded', () => {
	const foodOrderApp = new FoodOrdering('app');
});