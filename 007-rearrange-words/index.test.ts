import { rearrange } from './index';

it('is2 Thi1s T4est 3a', () => {
	const sentence = 'is2 Thi1s T4est 3a';

	const actual = rearrange(sentence);
	const expected = 'This is a Test';

	expect(actual).toBe(expected);
});

it('is2 Thi1s T4est 3a', () => {
	const sentence = 'is2 Thi1s T4est 3a';

	const actual = rearrange(sentence);
	const expected = 'This is a Test';

	expect(actual).toBe(expected);
});

it('4of Fo1r pe6ople g3ood th5e the2', () => {
	const sentence = '4of Fo1r pe6ople g3ood th5e the2';

	const actual = rearrange(sentence);
	const expected = 'For the good of the people';

	expect(actual).toBe(expected);
});

it('5weird i2s JavaScri1pt dam4n so3', () => {
	const sentence = '5weird i2s JavaScri1pt dam4n so3';

	const actual = rearrange(sentence);
	const expected = 'JavaScript is so damn weird';

	expect(actual).toBe(expected);
});

it('Space character', () => {
	const sentence = ' ';

	const actual = rearrange(sentence);
	const expected = '';

	expect(actual).toBe(expected);
});
