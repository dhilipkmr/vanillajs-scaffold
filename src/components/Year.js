import Creator from "./Creator.js";

class Year extends Creator {
	constructor(cb) {
		super();
		this.yearHandler = cb;
		this.$year1 = this.getElementById('2011');
		this.$year2 = this.getElementById('2012');
		this.$year3 = this.getElementById('2013');
		this.$year4 = this.getElementById('2014');
		this.addListener();
	}

	addListener = () => {
		[this.$year1, this.$year2, this.$year3, this.$year4].forEach((elt) => {
			elt.addEventListener('change', (e) => {
				const val = e.target.checked;
				const id = e.target.id;
				this.yearHandler(val, id);
			});
		});
	}
}
export default Year;
