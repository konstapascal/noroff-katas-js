import { replaceVowels } from './index';

it('replaceVowel("karAchi") ➞ "k1r1ch3"', () => {
	const word = 'karAchi';

	const actual = replaceVowels(word);
	const expected = 'k1r1ch3';

	expect(actual).toBe(expected);
});

it('replaceVowel("chEmBur") ➞ "ch2mb5r"', () => {
	const word = 'chEmBur';

	const actual = replaceVowels(word);
	const expected = 'ch2mb5r';

	expect(actual).toBe(expected);
});

it('replaceVowel("khandbari") ➞ "kh1ndb1r3"', () => {
	const word = 'khandbari';

	const actual = replaceVowels(word);
	const expected = 'kh1ndb1r3';

	expect(actual).toBe(expected);
});

it('replaceVowel("LexiCAl") ➞ "l2x3c1l"', () => {
	const word = 'LexiCAl';

	const actual = replaceVowels(word);
	const expected = 'l2x3c1l';

	expect(actual).toBe(expected);
});

it('replaceVowel("fuNctionS") ➞ "f5nct34ns"', () => {
	const word = 'fuNctionS';

	const actual = replaceVowels(word);
	const expected = 'f5nct34ns';

	expect(actual).toBe(expected);
});

it('replaceVowel("EASY") ➞ "21sy"', () => {
	const word = 'EASY';

	const actual = replaceVowels(word);
	const expected = '21sy';

	expect(actual).toBe(expected);
});
