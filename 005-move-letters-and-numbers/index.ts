let isUpperCase = str => isNaN(str) && str === str.toUpperCase();
let isLowerCase = str => isNaN(str) && str === str.toLowerCase();

export function reorder(word) {
	let upperCaseLetters = '';
	let lowerCaseLetters = '';
	let numbers = '';

	for (const char of word.split('')) {
		if (!isNaN(char)) numbers += char;
		if (isUpperCase(char)) upperCaseLetters += char;
		if (isLowerCase(char)) lowerCaseLetters += char;
	}

	return upperCaseLetters + lowerCaseLetters + numbers;
}
