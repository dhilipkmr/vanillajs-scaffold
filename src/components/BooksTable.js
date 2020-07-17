import DomCreator from './DomCreator.js'

class BooksTable extends DomCreator {
	constructor(cb) {
		super();
		this.updateBooksList = cb;
		this.$booksTable = this.getElementById('books-table');
		this.$tableHeader = this.getElementById('table-header');
	}

	createBooksTableDomData = ({ id, title, author, lender, borrower, username, nextRequested}) => {
		const $tr = this.createElement('tr', '');
		const $id = this.createElement('td', '', id);
		const $title = this.createElement('td', '', title);
		const $author = this.createElement('td', '', author);
		const $lender = this.createElement('td', '', lender);
		const $borrower = this.createElement('td', '', borrower);
		const $action = this.createElement('td');
		let buttonTxt = '';
		if (nextRequested && borrower !== username) {
			$action.innerText = `Requested by ${nextRequested}`;
		} else {
			if (username === lender) {
				buttonTxt = '';
			} else if (username === borrower) {
				buttonTxt = 'Return';
			} else if (borrower !== '-') {
				buttonTxt = 'Request Next';
			} else if (borrower === '-') {
				buttonTxt = 'Borrow';
			}
		}
	
		$tr.append($id);
		$tr.append($title);
		$tr.append($author);
		$tr.append($lender);
		$tr.append($borrower);
		$tr.append($action);
		if (buttonTxt) {
			const $btn = this.createElement('button', '', buttonTxt);
			$action.append($btn);
		}
		return $tr;
	}

	getAddBookRow = (id, lender) => {
		const $tr = this.createElement('tr', '');
		const $id = this.createElement('td', '', id);
		const $title = this.createElement('td', '');
		const $author = this.createElement('td', '');
		const $lender = this.createElement('td', '', lender);
		const $borrower = this.createElement('td', '', '-');
		const $titeInput = this.createElement('input', '', '', 'newBookTitle');
		const $authorInput = this.createElement('input', '', '', 'newBookAuthor');
		const $action = this.createElement('td');
		const $addNewBook = this.createElement('button', '', 'Add New', 'addNewBtn');
		$title.append($titeInput);
		$author.append($authorInput);
		$action.append($addNewBook);
		$tr.append($id);
		$tr.append($title);
		$tr.append($author);
		$tr.append($lender);
		$tr.append($borrower);
		$tr.append($action);
		return $tr;
	}

	updateBooksView = (books, loggedInUser) => {
		const $fragement = this.getNewFragment();
		$fragement.appendChild(this.$tableHeader);
		books.forEach((book) => {
			const { id, title, author, lender, borrower, nextRequested } = book;
			const $tr = this.createBooksTableDomData({ id, nextRequested, title, author, lender, borrower, username: loggedInUser.name });
			$fragement.appendChild($tr);
		});
		//Add last row
		const nextId = books.length + 1;
		if (loggedInUser.name) {
			const $lastRow = this.getAddBookRow(nextId, loggedInUser.name);
			$fragement.appendChild($lastRow);
		}
	
		this.$booksTable.innerHTML = null;
		this.$booksTable.appendChild($fragement);
		if (loggedInUser.name) {
			this.addListeners(nextId);
		}
	}

	addListeners = (nextId) => {
		// this.$addNew = this.getElementById('addNewBtn');
		// this.$addNew.addEventListener('click', () => {
		// 	const title = this.getElementById('newBookTitle').value;
		// 	const author = this.getElementById('newBookAuthor').value;
		// 	const newBook = { title, author };
		// 	this.updateBooksList(newBook);
		// });
		const allTr = document.querySelectorAll('tr');
		allTr.forEach(($item) => {
			$item.addEventListener('click', (e) => {
				// ADD new
				if (e.target.tagName === 'BUTTON' && e.target.id === 'addNewBtn') {
					const title = this.getElementById('newBookTitle').value;
					const author = this.getElementById('newBookAuthor').value;
					if (!title || !author) return;
					const newBook = { title, author };
					this.updateBooksList(newBook, 'add');
				}
				//Return 
				if (e.target.tagName === 'BUTTON' && e.target.innerText === 'Return') {
					const id = e.currentTarget.children[0].innerText;
					this.updateBooksList({ id }, 'return');
				}
				//Borrow
				if (e.target.tagName === 'BUTTON' && e.target.innerText === 'Borrow') {
					const id = e.currentTarget.children[0].innerText;
					this.updateBooksList({ id }, 'borrow');
				}
				//Request Next
				if (e.target.tagName === 'BUTTON' && e.target.innerText === 'Request Next') {
					const id = e.currentTarget.children[0].innerText;
					this.updateBooksList({ id }, 'requestNext');
				}
			});
		})
	}
}

export default BooksTable;