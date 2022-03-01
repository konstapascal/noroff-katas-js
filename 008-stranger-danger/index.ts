export function noStrangers(sentence) {
	const words = sentence
		.replace(/[^\w\s]/gi, '')
		.toLowerCase()
		.split(' ');

	const dictionary = {};

	let acquaintances = [];
	let friends = [];

	for (const word of words) {
		dictionary[word] ? dictionary[word]++ : (dictionary[word] = 1);

		if (dictionary[word] === 3) acquaintances.push(word);
		if (dictionary[word] === 5) {
			acquaintances = acquaintances.filter(element => element != word);
			friends.push(word);
		}
	}

	return [acquaintances, friends];
}
