export function rearrange(sentence) {
	if (sentence.trim() === '') return '';

	const splitSentence = sentence.split(' ');
	// [{number: 1, word: "This"}, {number: 4, word: "Test"}, ...]
	const dictionary = splitSentence.map(word => {
		for (const char of word) {
			if (isNaN(char)) continue;
			return {
				number: Number.parseInt(char),
				word: word.replace(char, '')
			};
		}
	});

	const sortedDictionary = dictionary.sort((first, second) => first.number - second.number);
	const words = sortedDictionary.map(obj => obj.word);
	const finalWord = words.join(' ');

	return finalWord;
}
