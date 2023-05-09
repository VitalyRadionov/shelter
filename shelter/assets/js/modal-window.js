import modalData from "./modal-content.js";

export default (n) => {

	let modalWindowBg = document.querySelector('.modal-window__bg');
	let modal = document.createElement('div');

	modalWindowBg.innerHTML = '';
	modal.classList.add('modal-window');
	modal.insertAdjacentHTML('afterbegin', modalData(n));
	modalWindowBg.insertAdjacentHTML('afterbegin', '<div class="close-modal-window"><div class="button-close"></div></div>');
	modalWindowBg.insertAdjacentElement('beforeend', modal);

	modalWindowBg.classList.add('active');
	modal.classList.add('active');
}