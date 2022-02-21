export function rearrange(sentence) {
	if (sentence.trim() === '') return '';

	return sentence
		.split(' ')
		.map(word => {
			for (const char of word) {
				if (isNaN(char)) continue;
				return {
					number: Number.parseInt(char),
					word: word.replace(char, '')
				};
			}
		})
		.sort((first, second) => first.number - second.number)
		.map(obj => obj.word)
		.join(' ');
}
