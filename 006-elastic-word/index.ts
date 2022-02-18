export function elasticize(word) {
	if (word.length < 3) return word;

	word = word.toUpperCase();

	let leftSide = '';
	let center = '';
	let rightSide = '';

	// Word length is odd
	if (word.length % 2 !== 0) {
		let middleIdx = Math.ceil(word.length / 2);

		leftSide = word.substring(0, middleIdx - 1);
		center = word[middleIdx - 1];
		rightSide = word.substring(middleIdx, word.length);
	}

	// Word length is even
	if (word.length % 2 === 0) {
		let halfLength = word.length / 2;

		leftSide = word.substring(0, halfLength);
		rightSide = word.substring(halfLength, word.length);
	}

	let finalWord = '';

	// Adding left side, center, right side
	for (let i = 0; i < leftSide.length; i++) {
		finalWord += leftSide[i].repeat(i + 1);
	}

	finalWord += center.repeat(leftSide.length + 1);

	for (let i = 0; i < rightSide.length; i++) {
		finalWord += rightSide[i].repeat(rightSide.length - i);
	}

	return finalWord;
}
