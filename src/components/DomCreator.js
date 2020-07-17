class DomCreator {
	getElementById(id) {
		return document.getElementById(id);
	}

	createElement(tag, className = '', textContent, id = '') {
		const $tag = document.createElement(tag);
		$tag.className = className;
		if (textContent) {
			$tag.innerText = textContent;
		}
		if (id) {
			$tag.id = id;
		}
		return $tag;
	}

	getNewFragment() {
		return document.createDocumentFragment();
	}
}

export default DomCreator;
