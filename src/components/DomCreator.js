class DomCreator {
	getElementById(id) {
		return document.getElementById(id);
	}

	createElement(tag, className, textContent) {
		const $tag = document.createElement(tag);
		$tag.className = className;
		if (textContent) {
			$tag.innerText = textContent;
		}
		return $tag;
	}
}

export default DomCreator;
