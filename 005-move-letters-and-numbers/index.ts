let isUpperCase = str => str === str.toUpperCase();
let isLowerCase = str => str === str.toLowerCase();

export function reorder(word) {
	const splitWord = word.split('');

	const upperCaseLetters = [];
	const lowerCaseLetters = [];
	const numbers = [];

	for (const char of splitWord) {
		// If char is a number
		if (!isNaN(char)) {
			numbers.push(char);
			continue;
		}

		// If char is upper case
		if (isUpperCase(char)) {
			upperCaseLetters.push(char);
			continue;
		}

		// If char is lower case
		if (isLowerCase(char)) {
			lowerCaseLetters.push(char);
			continue;
		}
	}

	// Constructing final word
	const finalWord = upperCaseLetters.join('') + lowerCaseLetters.join('') + numbers.join('');

	return finalWord;
}
