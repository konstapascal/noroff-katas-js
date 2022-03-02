export function shuffleCount(arrLen) {
	let arr = constructArr(arrLen);
	let count = getShuffleCount(arr);

	return count;
}

function constructArr(arrLen) {
	const arr = [];

	for (let idx = 0; idx < arrLen; idx++) {
		arr.push(idx + 1);
	}

	return arr;
}

function getShuffleCount(arr) {
	const middleIdx = arr.length / 2;

	const firstHalf = arr.slice(0, middleIdx);
	const secondHalf = arr.slice(middleIdx);

	const shuffledArr = [];

	for (let idx = 0; idx < firstHalf.length; idx++) {
		shuffledArr.push(firstHalf[idx]);
		shuffledArr.push(secondHalf[idx]);
	}

	return 0;
}
