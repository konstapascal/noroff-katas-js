export function doubleLetterSplitter(word) {
	word = word.toLowerCase();

	const finalArr = [];
	let nextSplitStart = 0;

	for (let i = 0; i < word.length - 1; i++) {
		if (word[i] === word[i + 1]) {
			finalArr.push(word.substring(nextSplitStart, i + 1));
			nextSplitStart = i + 1;
		}
	}

	if (finalArr.length === 0) return finalArr;

	finalArr.push(word.substring(nextSplitStart, word.length));

	return finalArr;
}

doubleLetterSplitter('Letter');
