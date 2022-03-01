export function replaceVowels(word) {
	const dict = ['a', 'e', 'i', 'o', 'u'];

	return word
		.toLowerCase()
		.split('')
		.map(char => (dict.includes(char) ? dict.indexOf(char) + 1 : char))
		.join('');
}
