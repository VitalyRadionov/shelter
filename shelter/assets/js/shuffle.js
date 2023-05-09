import getRandomNum from "./randomaizer.js";

export default (newData) => {
	for (let i = 0; i < newData.length / 2; i++) {
		const j = getRandomNum(0, 7);
		const k = getRandomNum(0, 7);
		[newData[k], newData[j]] = [newData[j], newData[k]];
	}
}