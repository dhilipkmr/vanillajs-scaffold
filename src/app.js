import BooksTable from './components/BooksTable.js';
import Login from './components/Login.js';

class BooksClub {
	constructor() {
		this.userDirectory = new Map([[100, 'Dhilip'], [101, 'Kumar']]);
		this.userIdCounter = this.userDirectory.size + 100;
		this.booksDirectory = [
			{
				id: 1, title: 'Book 1', author: 'Author', lender: 'Kumar', borrower: 'Dhilip', nextRequested: ''
			},
			{
				id: 2, title: 'Book 2', author: 'Author', lender: 'Dhilip', borrower: 'Kumar', nextRequested: ''
			}
		];
		this.booksCounter = this.booksDirectory.length;
		this.booksTableView = new BooksTable(this.updateBooksList);
		this.loginView = new Login(this.loginUser);
		this.loggedInUser = {};
		this.updateBooksTable();
	}

	loginUser = (newLoginName) => {
		if (newLoginName) {
			let hasUser = false;
			Array.from(this.userDirectory).forEach((val) => {
				const [id, name] = val;
				if (name === newLoginName) {
					hasUser = true;
					this.loggedInUser = { id, name };
				}
			});
			if (!hasUser) {
				this.userIdCounter++;
				this.loggedInUser = {
					id: this.userIdCounter,
					name: newLoginName
				};
				this.userDirectory.set(this.userIdCounter, newLoginName);
			}
		} else {
			this.loggedInUser = {};
		}
		this.updateBooksTable();
	}

	updateBooksTable = () => {
		this.booksTableView.updateBooksView(this.booksDirectory, this.loggedInUser);
	}

	updateAfterTimer = () => {

	}

	updateBooksList = ({ title, author, id }, type) => {
		if (type === 'add') {
			this.booksCounter++;
			this.booksDirectory.push({
				id: this.booksCounter,
				title,
				author,
				lender: this.loggedInUser.name,
				borrower: '-',
				nextRequested: ''
			});
		} else if (type === 'return') {
			this.booksDirectory.forEach((item) => {
				if (item.id == id) {
					item.borrower = '-';
					if (item.nextRequested) {
						item.borrower = item.nextRequested;
						item.nextRequested = '';
					}
				}
			})
		} else if (type === 'borrow') {
			this.booksDirectory.forEach((item) => {
				if (item.id == id) {
					item.borrower = this.loggedInUser.name;
				}
			})
		} else if (type === 'requestNext') {
			this.booksDirectory.forEach((item) => {
				if (item.id == id) {
					item.nextRequested = this.loggedInUser.name;
				}
			})
		}
		this.updateBooksTable();
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const app = new BooksClub();
});