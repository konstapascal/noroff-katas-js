export function caesarCipher(sentence, offset) {
	const fromCharCode = String.fromCharCode;

	let newSentence = '';

	for (let i = 0; i < sentence.length; i++) {
		const charCode = sentence.charCodeAt(i);
		const currChar = sentence[i];

		// Handle non letters
		if (charCode < 65 || charCode > 122) {
			newSentence += currChar;
			continue;
		}

		let newCharCode = charCode + offset;

		// Handle letters
		if (isLowerCase(currChar)) {
			if (newCharCode > 122) {
				newSentence += fromCharCode(97 + (122 % charCode));
				continue;
			}

			newSentence += fromCharCode(newCharCode);
			continue;
		}

		if (newCharCode > 90) {
			newSentence += fromCharCode(65 + (90 % charCode));
			continue;
		}

		newSentence += fromCharCode(newCharCode);
	}

	return newSentence;
}

function isLowerCase(letter) {
	return letter === letter.toLowerCase();
}
