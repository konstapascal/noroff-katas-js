export function elasticize(word) {
	if (word.length < 3) return word;

	word = word.toUpperCase();

	let left = '';
	let center = '';
	let right = '';

	// Word length is odd
	if (word.length % 2 !== 0) {
		let middleIdx = Math.ceil(word.length / 2);

		left = word.substring(0, middleIdx - 1);
		center = word[middleIdx - 1];
		right = word.substring(middleIdx, word.length);
	}

	// Word length is even
	if (word.length % 2 === 0) {
		let halfLength = word.length / 2;

		left = word.substring(0, halfLength);
		right = word.substring(halfLength, word.length);
	}

	let finalWord = '';

	// Adding left, center, right
	for (let i = 0; i < left.length; i++) {
		finalWord += left[i].repeat(i + 1);
	}

	finalWord += center.repeat(left.length + 1);

	for (let i = 0; i < right.length; i++) {
		finalWord += right[i].repeat(right.length - i);
	}

	return finalWord;
}
