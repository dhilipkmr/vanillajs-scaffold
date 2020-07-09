import { createCard } from './lib/utils.js';
function makeCard() {
	document.body.innerHTML = createCard();
}
document.addEventListener('DOMContentLoaded', makeCard);