// const fading = document.querySelector('.fading');

let fading = {
	toggle(n) {
		document.querySelector(n).classList.toggle('display-none');
	},
	animation(n) {
		document.querySelector(n).classList.toggle('fading-animation');
	}
}

export default fading;