import { noStrangers } from './index';

it('Spot and see', () => {
	const sentence = 'See Spot run. See Spot jump. Spot likes jumping. See Spot fly.';

	const actual = noStrangers(sentence);
	const expected = [['spot', 'see'], []];

	expect(actual).toEqual(expected);
});
