import Creator from './Creator.js';

class Matches extends Creator{
	constructor() {
		super();
		this.$matchContainer = this.getElementById('matchContainer');
	}

	addMatchesTotheView = (list) => {
		this.$matchContainer.innerHTML = '';
		list.forEach((item) => {
			const { name, year, winner, runner } = item;
			const $parent = this.createElement('div', 'matchCard box-shadow pad10');
			const $name = this.createElement('div', '', name);
			const $year = this.createElement('div', '', year);
			const $winner = this.createElement('div', '', winner);
			const $runner = this.createElement('div', '', runner);
			$parent.append($name);
			$parent.append($year);
			$parent.append($winner);
			$parent.append($runner);
			this.$matchContainer.appendChild($parent);
		});
	}
}
export default Matches;