import { reorder } from './index';

it("should return 'APhpy24' for 'hA2p4Py'", () => {
	const word = 'hA2p4Py';

	const actual = reorder(word);
	const expected = 'APhpy24';

	expect(actual).toBe(expected);
});

it("should return 'MENTmove11' for 'm11oveMENT'", () => {
	const word = 'm11oveMENT';

	const actual = reorder(word);
	const expected = 'MENTmove11';

	expect(actual).toBe(expected);
});

it("should return 'OCAKEshrt94' for 's9hOrt4CAKE'", () => {
	const word = 's9hOrt4CAKE';

	const actual = reorder(word);
	const expected = 'OCAKEshrt94';

	expect(actual).toBe(expected);
});
