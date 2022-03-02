import { shuffleCount } from './index';

it('shuffleCount(8) ➞ 2', () => {
	const val = 8;

	const actual = shuffleCount(val);
	const expected = 3;

	expect(actual).toBe(expected);
});

it('shuffleCount(14) ➞ 12', () => {
	const val = 14;

	const actual = shuffleCount(val);
	const expected = 12;

	expect(actual).toBe(expected);
});

it('shuffleCount(52) ➞ 8', () => {
	const val = 52;

	const actual = shuffleCount(val);
	const expected = 8;

	expect(actual).toBe(expected);
});
