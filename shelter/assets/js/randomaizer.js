function getRandomNum(a = 1, b = 0) {
	const max = Math.max(a, b);
	const min = Math.min(a, b);

	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default getRandomNum;