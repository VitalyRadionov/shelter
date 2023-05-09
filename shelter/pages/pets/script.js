import paginator from "./../../assets/js/pets/paginator.js"
import fading from "./../../assets/js/fading.js";
import modalWindow from "./../../assets/js/modal-window.js";

paginator();
document.body.addEventListener('click', defineTarget);

const menuBurger = document.querySelector('.menu-burger');

menuBurger.addEventListener('click', defineMenuBurger);


function defineMenuBurger(e) {
	if (e.target.classList.contains('burger') || e.target.classList.contains('burger-line') || e.target.nodeName === 'A' || e.target.nodeName === 'SPAN') {
		console.log('burger');
		fading.toggle('.fading-pets');
		setTimeout(() => {
			fading.animation('.fading-pets');
		}, 0);

		document.querySelector('html').style.overflow = document.querySelector('html').style.overflow.length ? '' : 'hidden';

		menuBurger.querySelector('.menu-320px').classList.toggle('menu-320px-check-out');
		menuBurger.querySelector('.burger').classList.toggle('burger-rotate');
	}
}

function defineTarget(e) {
	if (e.target.classList.contains('fading-pets')) {
		console.log('fading-pets');
		fading.toggle('.fading-pets');
		setTimeout(() => {
			fading.animation('.fading-pets');
		}, 0);

		document.querySelector('html').style.overflow = document.querySelector('html').style.overflow.length ? '' : 'hidden';

		menuBurger.querySelector('.menu-320px').classList.toggle('menu-320px-check-out');
		menuBurger.querySelector('.burger').classList.toggle('burger-rotate');
	}

	if (e.target.parentNode.className === 'card' || e.target.className === 'card') {
		console.log('card ', e.target.dataset.name);
		document.querySelector('html').style.overflow = document.querySelector('html').style.overflow.length ? '' : 'hidden';
		modalWindow(e.target.dataset.name);
	}

	if (e.target.classList.contains('modal-window__bg') || e.target.classList.contains('button-close')) {
		console.log('close');
		document.querySelector('.modal-window__bg').classList.remove('active');
		document.querySelector('html').style.overflow = '';
	}
}