import { maximumProfit } from './index';

it('should return 14 for array', () => {
	const values = [8, 5, 12, 9, 19, 1];

	const actual = maximumProfit(values);
	const expected = 14;

	expect(actual).toBe(expected);
});

it('should return 7 for array', () => {
	const values = [2, 4, 9, 3, 8];

	const actual = maximumProfit(values);
	const expected = 7;

	expect(actual).toBe(expected);
});

it('should return 0 for array', () => {
	const values = [21, 12, 11, 9, 6, 3];

	const actual = maximumProfit(values);
	const expected = 0;

	expect(actual).toBe(expected);
});
