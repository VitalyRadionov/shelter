import data from './../cards-generation.js';
import getRandomNum from "./../randomaizer.js";
import shuffleCards from "./../shuffle.js";

shuffleCards(data);

const groupCards = {
	start: 0,
	end: 0,
	check: (cards, cards2, j) => (cards.find(e => e.outerHTML === data[j]) ?? false) || (cards2.find(e => e === data[j]) ?? false),
	getNewCards(cards) {
		const cards2 = [];
		let j = getRandomNum(0, 7);

		cards.forEach(() => {
			while (this.check(cards, cards2, j)) {
				j = getRandomNum(0, 7);
			}
			cards2.push(data[j]);
		});
		return cards2;
	},
	getCards() {
		this.start = this.end;
		this.end = this.end + 3;

		if (this.end >= data.length) {
			return [...data.slice(this.start, this.end), ...data.slice(0, (this.end = this.end - data.length, this.end))];
		}

		return data.slice(this.start, this.end);
	},
	onRight() {
		const cards = [...[...document.querySelectorAll('.slide')].reverse()[0].querySelectorAll('.card')];
		return this.getNewCards(cards);
	},
	onLeft() {
		const cards = [...document.querySelector('.slide').querySelectorAll('.card')];
		return this.getNewCards(cards);
	},
}

const slider = () => {
	let btnR = document.querySelector('.btn-r');
	let btnL = document.querySelector('.btn-l');
	let slides = () => [...document.querySelectorAll(".slide")];

	addStartSlides();

	function addStartSlides() {
		drow(groupCards.getCards(), 'move-left');
		drow(groupCards.getCards(), 'default');
		drow(groupCards.getCards(), 'move-right');
	}

	function drow(cards, position) {
		let slide = document.createElement("div");
		slide.classList.add("slide");
		slide.insertAdjacentHTML('afterbegin', cards.join(''));
		slide.classList.add(position);

		if (position === 'move-left') document.querySelector(".slider-container").prepend(slide);
		if (position === 'default') document.querySelector(".slider-container").append(slide);
		if (position === 'move-right') document.querySelector(".slider-container").append(slide);
	}

	function right() {
		btnR.removeEventListener('click', right);
		btnL.removeEventListener('click', left);

		slides()[1].classList.add('move-left');
		slides()[2].classList.remove('move-right');

		setTimeout(function () {
			slides()[0].remove();
			drow(groupCards.onRight(), 'move-right', 1);
			btnR.addEventListener("click", right);
			btnL.addEventListener("click", left);

		}, 1000);
	}

	function left() {
		btnL.removeEventListener('click', left);
		btnR.removeEventListener('click', right);

		slides()[0].classList.remove('move-left');
		slides()[1].classList.add('move-right');

		setTimeout(function () {
			slides()[2].remove();
			drow(groupCards.onLeft(), 'move-left', -1);
			btnL.addEventListener("click", left);
			btnR.addEventListener("click", right);

		}, 1000);
	}

	btnR.addEventListener("click", right);
	btnL.addEventListener('click', left);
}

export default slider;