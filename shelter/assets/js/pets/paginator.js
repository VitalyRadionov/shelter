import data from './../cards-generation.js';
import getRandomNum from "./../randomaizer.js";
import shuffleCards from "./../shuffle.js";

let dataArray = [];
let paginatorNumber = 1;

function paginator() {
	const d = data;
	let btnR = document.querySelector('.btn-right');
	let btnL = document.querySelector('.btn-left');
	let btnLastR = document.querySelector('.btn-last-right');
	let btnLastL = document.querySelector('.btn-last-left');
	let slide = document.querySelector('.slide');
	let paginatorActive = document.querySelector('.paginator-active');

	window.addEventListener('resize', slideResize)
	paginatorActive.innerHTML = paginatorNumber;


	// console.log(slide);
	getBigArr(d);
	// console.log(dataArray);
	drow(dataArray);

	function slideResize() {
		let slideWidth = document.querySelector('.slide').clientWidth;

		if (slideWidth >= 890) {
			if (paginatorNumber >= 6) {
				paginatorNumber = 6;
				btnLastL.classList.remove('paginator-inactive');
				btnL.classList.remove('paginator-inactive');
				btnLastR.classList.add('paginator-inactive');
				btnR.classList.add('paginator-inactive');
				paginatorActive.innerHTML = paginatorNumber;

				slide.style.left = `${-(paginatorNumber - 1) * (slideWidth + 40)}px`;
				btnR.removeEventListener('click', right);
				btnLastR.removeEventListener('click', lastRight);
				return;
			}
			btnLastR.classList.remove('paginator-inactive');
			btnR.classList.remove('paginator-inactive');
			console.log('paginatorNumber', paginatorNumber);
			console.log('slideResize <= ', slideWidth);
			paginatorActive.innerHTML = paginatorNumber;

			slide.style.left = `${-(paginatorNumber - 1) * (slideWidth + 40)}px`;
			btnR.addEventListener('click', right);
			btnLastR.addEventListener('click', lastRight);
			return;
		}

		if (slideWidth >= 580) {
			if (paginatorNumber >= 8) {
				paginatorNumber = 8;
				btnLastL.classList.remove('paginator-inactive');
				btnL.classList.remove('paginator-inactive');
				btnLastR.classList.add('paginator-inactive');
				btnR.classList.add('paginator-inactive');
				paginatorActive.innerHTML = paginatorNumber;

				slide.style.left = `${-(paginatorNumber - 1) * (slideWidth + 40)}px`;
				btnR.removeEventListener('click', right);
				btnLastR.removeEventListener('click', lastRight);
				return;
			}
			btnLastR.classList.remove('paginator-inactive');
			btnR.classList.remove('paginator-inactive');
			console.log('paginatorNumber', paginatorNumber);
			console.log('slideResize <= ', slideWidth);
			paginatorActive.innerHTML = paginatorNumber;

			slide.style.left = `${-(paginatorNumber - 1) * (slideWidth + 40)}px`;
			btnR.addEventListener('click', right);
			btnLastR.addEventListener('click', lastRight);
			return;
		}

		if (slideWidth >= 270) {
			if (paginatorNumber == 16) {
				paginatorNumber = 16;
				btnLastL.classList.remove('paginator-inactive');
				btnL.classList.remove('paginator-inactive');
				btnLastR.classList.add('paginator-inactive');
				btnR.classList.add('paginator-inactive');
				paginatorActive.innerHTML = paginatorNumber;

				slide.style.left = `${-(paginatorNumber - 1) * (slideWidth + 40)}px`;
				btnR.removeEventListener('click', right);
				btnLastR.removeEventListener('click', lastRight);
				return;
			}
			btnLastR.classList.remove('paginator-inactive');
			btnR.classList.remove('paginator-inactive');
			console.log('paginatorNumber', paginatorNumber);
			console.log('slideResize <= ', slideWidth);
			paginatorActive.innerHTML = paginatorNumber;

			slide.style.left = `${-(paginatorNumber - 1) * (slideWidth + 40)}px`;
			btnR.addEventListener('click', right);
			btnLastR.addEventListener('click', lastRight);
			return;
		}
	}

	function right() {
		btnR.removeEventListener('click', right);
		btnLastR.removeEventListener('click', lastRight);
		btnL.removeEventListener('click', left);

		const slideWidth = document.querySelector('.slide').clientWidth;
		paginatorNumber++;

		btnLastL.classList.remove('paginator-inactive');
		btnL.classList.remove('paginator-inactive');
		btnLastR.classList.remove('paginator-inactive');
		btnR.classList.remove('paginator-inactive');

		if (slideWidth >= 1200 && paginatorNumber <= 6) {
			console.log('paginatorNumber', paginatorNumber);
			console.log(slideWidth);
			paginatorActive.innerHTML = paginatorNumber;
			slide.style.left = `${-(paginatorNumber - 1) * 1240}px`;
			if (paginatorNumber === 6) {
				btnR.classList.add('paginator-inactive');
				btnLastR.classList.add('paginator-inactive');
				btnL.addEventListener('click', left);
				btnLastL.addEventListener('click', lastLeft);
				return;
			};
			setTimeout(() => {
				btnL.addEventListener('click', left);
				btnLastL.addEventListener('click', lastLeft);
				btnLastR.addEventListener('click', lastRight);
				btnR.addEventListener('click', right);
			}, 500);
			return;
		}

		if (slideWidth >= 890 && paginatorNumber <= 6) {
			console.log(slideWidth);
			paginatorActive.innerHTML = paginatorNumber;
			slide.style.left = `${-(paginatorNumber - 1) * 930}px`;
			if (paginatorNumber === 6) {
				btnR.classList.add('paginator-inactive');
				btnLastR.classList.add('paginator-inactive');
				btnL.addEventListener('click', left);
				btnLastL.addEventListener('click', lastLeft);
				return;
			};
			setTimeout(() => {
				btnL.addEventListener('click', left);
				btnLastL.addEventListener('click', lastLeft);
				btnLastR.addEventListener('click', lastRight);
				btnR.addEventListener('click', right);
			}, 500);
			return;
		}

		if (slideWidth >= 580 && paginatorNumber <= 8) {
			console.log(slideWidth);
			paginatorActive.innerHTML = paginatorNumber;
			slide.style.left = `${-(paginatorNumber - 1) * 620}px`;
			if (paginatorNumber === 8) {
				btnR.classList.add('paginator-inactive');
				btnLastR.classList.add('paginator-inactive');
				btnL.addEventListener('click', left);
				btnLastL.addEventListener('click', lastLeft);
				return;
			};
			setTimeout(() => {
				btnL.addEventListener('click', left);
				btnLastL.addEventListener('click', lastLeft);
				btnLastR.addEventListener('click', lastRight);
				btnR.addEventListener('click', right);
			}, 500);
			return;
		}

		if (slideWidth >= 270 && paginatorNumber <= 16) {
			console.log(slideWidth);
			paginatorActive.innerHTML = paginatorNumber;
			slide.style.left = `${-(paginatorNumber - 1) * 310}px`;
			if (paginatorNumber === 16) {
				btnR.classList.add('paginator-inactive');
				btnLastR.classList.add('paginator-inactive');
				btnL.addEventListener('click', left);
				btnLastL.addEventListener('click', lastLeft);
				return;
			};
			setTimeout(() => {
				btnL.addEventListener('click', left);
				btnLastL.addEventListener('click', lastLeft);
				btnLastR.addEventListener('click', lastRight);
				btnR.addEventListener('click', right);
			}, 500);
			return;
		}
	}

	function left() {
		btnL.removeEventListener('click', left);
		btnLastL.removeEventListener('click', lastLeft);
		btnR.removeEventListener('click', right);

		const slideWidth = document.querySelector('.slide').clientWidth;
		paginatorNumber--;

		btnLastR.classList.remove('paginator-inactive');
		btnR.classList.remove('paginator-inactive');

		if (slideWidth >= 1200 && paginatorNumber <= 6) {
			console.log('paginatorNumber', paginatorNumber);
			console.log(slideWidth);
			paginatorActive.innerHTML = paginatorNumber;
			slide.style.left = `${-(paginatorNumber - 1) * 1240}px`;
			if (paginatorNumber === 1) {
				btnL.classList.add('paginator-inactive');
				btnLastL.classList.add('paginator-inactive');
				btnR.classList.remove('paginator-inactive');
				btnLastR.classList.remove('paginator-inactive');
				btnR.addEventListener('click', right);
				btnLastR.addEventListener('click', lastRight);
				return;
			};
			setTimeout(() => {
				btnL.addEventListener('click', left);
				btnLastL.addEventListener('click', lastLeft);
				btnLastR.addEventListener('click', lastRight);
				btnR.addEventListener('click', right);
			}, 500);
			return;
		}

		if (slideWidth >= 890 && paginatorNumber <= 6) {
			console.log(slideWidth);
			paginatorActive.innerHTML = paginatorNumber;
			slide.style.left = `${-(paginatorNumber - 1) * 930}px`;
			if (paginatorNumber === 1) {
				btnL.classList.add('paginator-inactive');
				btnLastL.classList.add('paginator-inactive');
				btnR.classList.remove('paginator-inactive');
				btnLastR.classList.remove('paginator-inactive');
				btnR.addEventListener('click', right);
				btnLastR.addEventListener('click', lastRight);
				return;
			};
			setTimeout(() => {
				btnL.addEventListener('click', left);
				btnLastL.addEventListener('click', lastLeft);
				btnLastR.addEventListener('click', lastRight);
				btnR.addEventListener('click', right);
			}, 500);
			return;
		}

		if (slideWidth >= 580 && paginatorNumber <= 8) {
			console.log(slideWidth);
			paginatorActive.innerHTML = paginatorNumber;
			slide.style.left = `${-(paginatorNumber - 1) * 620}px`;
			if (paginatorNumber === 1) {
				btnL.classList.add('paginator-inactive');
				btnLastL.classList.add('paginator-inactive');
				btnR.classList.remove('paginator-inactive');
				btnLastR.classList.remove('paginator-inactive');
				btnR.addEventListener('click', right);
				btnLastR.addEventListener('click', lastRight);
				return;
			};
			setTimeout(() => {
				btnL.addEventListener('click', left);
				btnLastL.addEventListener('click', lastLeft);
				btnLastR.addEventListener('click', lastRight);
				btnR.addEventListener('click', right);
			}, 500);
			return;
		}

		if (slideWidth >= 270 && paginatorNumber <= 16) {
			console.log(slideWidth);
			paginatorActive.innerHTML = paginatorNumber;
			slide.style.left = `${-(paginatorNumber - 1) * 310}px`;
			if (paginatorNumber === 1) {
				btnL.classList.add('paginator-inactive');
				btnLastL.classList.add('paginator-inactive');
				btnR.classList.remove('paginator-inactive');
				btnLastR.classList.remove('paginator-inactive');
				btnR.addEventListener('click', right);
				return;
			};
			setTimeout(() => {
				btnL.addEventListener('click', left);
				btnLastL.addEventListener('click', lastLeft);
				btnLastR.addEventListener('click', lastRight);
				btnR.addEventListener('click', right);
			}, 500);
			return;
		}
	}

	function lastRight() {
		btnR.removeEventListener('click', right);
		btnLastR.removeEventListener('click', lastRight);
		btnL.removeEventListener('click', left);
		// btnLastL.removeEventListener('click', left);

		const slideWidth = document.querySelector('.slide').clientWidth;
		// paginatorNumber++;

		btnLastL.classList.remove('paginator-inactive');
		btnL.classList.remove('paginator-inactive');
		btnLastR.classList.add('paginator-inactive');
		btnR.classList.add('paginator-inactive');

		if (slideWidth >= 1200) {
			paginatorNumber = 6;
			console.log('paginatorNumber', paginatorNumber);
			console.log(slideWidth);
			paginatorActive.innerHTML = paginatorNumber;
			slide.style.left = `${-(paginatorNumber - 1) * 1240}px`;
			// if (paginatorNumber === 6) {
			// btnR.classList.add('paginator-inactive');
			// btnLastR.classList.add('paginator-inactive');
			// btnL.addEventListener('click', left);
			// btnLastL.addEventListener('click', left);
			// 	return;
			// };
			setTimeout(() => {
				btnL.addEventListener('click', left);
				btnLastL.addEventListener('click', lastLeft);
			}, 500);
			return;
		}

		if (slideWidth >= 890) {
			paginatorNumber = 6;
			console.log(slideWidth);
			paginatorActive.innerHTML = paginatorNumber;
			slide.style.left = `${-(paginatorNumber - 1) * 930}px`;
			// if (paginatorNumber === 6) {
			// btnR.classList.add('paginator-inactive');
			// btnLastR.classList.add('paginator-inactive');
			// btnL.addEventListener('click', left);
			// btnLastL.addEventListener('click', left);
			// 	return;
			// };
			setTimeout(() => {
				btnL.addEventListener('click', left);
				btnLastL.addEventListener('click', lastLeft);
			}, 500);
			return;
		}

		if (slideWidth >= 580) {
			paginatorNumber = 8;
			console.log(slideWidth);
			paginatorActive.innerHTML = paginatorNumber;
			slide.style.left = `${-(paginatorNumber - 1) * 620}px`;
			// if (paginatorNumber === 8) {
			// btnR.classList.add('paginator-inactive');
			// btnLastR.classList.add('paginator-inactive');
			// btnL.addEventListener('click', left);
			// btnLastL.addEventListener('click', left);
			// 	return;
			// };
			setTimeout(() => {
				btnL.addEventListener('click', left);
				btnLastL.addEventListener('click', lastLeft);
			}, 500);
			return;
		}

		if (slideWidth >= 270) {
			paginatorNumber = 16;
			console.log(slideWidth);
			paginatorActive.innerHTML = paginatorNumber;
			slide.style.left = `${-(paginatorNumber - 1) * 310}px`;
			// if (paginatorNumber === 16) {
			// btnR.classList.add('paginator-inactive');
			// btnLastR.classList.add('paginator-inactive');
			// btnL.addEventListener('click', left);
			// btnLastL.addEventListener('click', left);
			// 	return;
			// };
			setTimeout(() => {
				btnL.addEventListener('click', left);
				btnLastL.addEventListener('click', lastLeft);
			}, 500);
			return;
		}
	}

	function lastLeft() {
		btnR.removeEventListener('click', right);
		btnLastL.removeEventListener('click', lastLeft);
		btnL.removeEventListener('click', left);

		const slideWidth = document.querySelector('.slide').clientWidth;

		btnLastL.classList.add('paginator-inactive');
		btnL.classList.add('paginator-inactive');
		btnLastR.classList.remove('paginator-inactive');
		btnR.classList.remove('paginator-inactive');

		if (slideWidth >= 1200) {
			paginatorNumber = 1;
			console.log('paginatorNumber', paginatorNumber);
			console.log(slideWidth);
			paginatorActive.innerHTML = paginatorNumber;
			slide.style.left = `${-(paginatorNumber - 1) * 1240}px`;
			setTimeout(() => {
				btnR.addEventListener('click', right);
				btnLastR.addEventListener('click', lastRight);
			}, 500);
			return;
		}

		if (slideWidth >= 890) {
			paginatorNumber = 1;
			console.log(slideWidth);
			paginatorActive.innerHTML = paginatorNumber;
			slide.style.left = `${-(paginatorNumber - 1) * 930}px`;
			setTimeout(() => {
				btnR.addEventListener('click', right);
				btnLastR.addEventListener('click', lastRight);
			}, 500);
			return;
		}

		if (slideWidth >= 580) {
			paginatorNumber = 1;
			console.log(slideWidth);
			paginatorActive.innerHTML = paginatorNumber;
			slide.style.left = `${-(paginatorNumber - 1) * 620}px`;
			setTimeout(() => {
				btnR.addEventListener('click', right);
				btnLastR.addEventListener('click', lastRight);
			}, 500);
			return;
		}

		if (slideWidth >= 270) {
			paginatorNumber = 1;
			console.log(slideWidth);
			paginatorActive.innerHTML = paginatorNumber;
			slide.style.left = `${-(paginatorNumber - 1) * 310}px`;
			setTimeout(() => {
				btnR.addEventListener('click', right);
				btnLastR.addEventListener('click', lastRight);
			}, 500);
			return;
		}
	}

	btnR.addEventListener('click', right);
	btnLastR.addEventListener('click', lastRight);
}

function getBigArr(cards) {
	shuffleCards(cards);
	// console.log(cards);

	if (!dataArray.length) {
		// dataArray.push([].concat(cards));
		dataArray = dataArray.concat(cards);
		// console.log('dataArray.concat(...cards)', dataArray);
	}

	for (let i = 1; i < 5; i++) {
		shuffleCards(cards);
		// console.log(cards);
		let lastTwo = dataArray.slice(-2);
		let firstFour = cards.slice(0, 4);

		let c = lastTwo.some((a, i) => {
			// console.log('a', a);
			return firstFour.some((b, j) => {
				// console.log('b', b);

				return b === a;
			});
		});

		if (c) {
			// console.log('dublicat');
			getBigArr(cards);
		}
		// console.log('c', c);
		// console.log('lastTwo', lastTwo);
		// console.log('firstFour', firstFour);
		if (dataArray.length < 48) dataArray = dataArray.concat(...cards);
		else return;
	}

}

function drow(cards) {
	let slide = document.querySelector('.slide');
	// slide.classList.add("slide");
	slide.insertAdjacentHTML('afterbegin', cards.join(''));
	document.querySelectorAll('.card').forEach((e, i) => e.style.gridArea = `a${i + 1}`)
}



export default paginator;