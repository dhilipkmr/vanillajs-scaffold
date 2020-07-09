import Matches from './components/Matches.js';
import Search from './components/Search.js';
import Year from './components/Year.js';

class App {
	constructor() {
		this.matchData = [];
		this.filterValue = '';
		this.filteredMatchesData = [];
		this.matchView = new Matches();
		this.searchView = new Search(this.filterWinnersByName);
		this.yearView = new Year(this.chooseYear);
		this.getMatchesData();
	}
	
	filterByResults() {

	}

	chooseYear = (isChecked, year) => {
		if (isChecked) {
			this.getMatchesData(year);
		}
	}

	filterWinnersByName = (val) => {
		this.filterValue = val;
		this.updatePerFilter();
	}

	updatePerFilter = () => {
		if (this.filterValue) {
			this.filteredMatchesData = this.matchData.filter((item) => {
				return item.winner.indexOf(this.filterValue) > -1;
			});
			this.updateMatchestoView(this.filteredMatchesData);
		} else {
			this.updateMatchestoView(this.matchData);
		}
	}

	updateMatchestoView = (contents) => {
		this.matchView.addMatchesTotheView(contents);
	}

	getMatchesData = (year = 2011) => {
		fetch(`https://jsonmock.hackerrank.com/api/football_competitions?year=${year}`).then((res) => res.json()).then((res) => {
			if (res.data) {
				this.matchData = [...this.matchData, ...res.data];
				this.updatePerFilter();
			} else {
				throw new Error('Failed to respond successfully!');
			}
		}).catch((err) => {
			console.log(err.message);
		});
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const matches = new App();
});