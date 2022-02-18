import { elasticize } from './index';

it("should return 'ANNNNA' for 'ANNA'", () => {
	const word = 'ANNA';

	const actual = elasticize(word);
	const expected = 'ANNNNA';

	expect(actual).toBe(expected);
});

it("should return 'KAAYYYAAK' for 'KAYAK'", () => {
	const word = 'KAYAK';

	const actual = elasticize(word);
	const expected = 'KAAYYYAAK';

	expect(actual).toBe(expected);
});

it("should return 'X' for 'X'", () => {
	const word = 'X';

	const actual = elasticize(word);
	const expected = 'X';

	expect(actual).toBe(expected);
});
