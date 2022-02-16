import { doubleLetterSplitter } from './index';

it("should return ['let', 'ter'] for 'Letter'", () => {
	const value = 'Letter';

	const actual = doubleLetterSplitter(value);
	const expected = ['let', 'ter'];

	expect(actual).toEqual(expected);
});

it("should return ['real', 'ly'] for 'Really'", () => {
	const value = 'Really';

	const actual = doubleLetterSplitter(value);
	const expected = ['real', 'ly'];

	expect(actual).toEqual(expected);
});

it("should return ['hap', 'py'] for 'Happy'", () => {
	const value = 'Happy';

	const actual = doubleLetterSplitter(value);
	const expected = ['hap', 'py'];

	expect(actual).toEqual(expected);
});

it("should return ['shal', 'l'] for 'Shall'", () => {
	const value = 'Shall';

	const actual = doubleLetterSplitter(value);
	const expected = ['shal', 'l'];

	expect(actual).toEqual(expected);
});

it("should return ['to', 'ol'] for 'Tool'", () => {
	const value = 'Tool';

	const actual = doubleLetterSplitter(value);
	const expected = ['to', 'ol'];

	expect(actual).toEqual(expected);
});

it("should return ['mis', 'sis', 'sip', 'pi'] for 'Mississippi'", () => {
	const value = 'Mississippi';

	const actual = doubleLetterSplitter(value);
	const expected = ['mis', 'sis', 'sip', 'pi'];

	expect(actual).toEqual(expected);
});

it("should return [] for 'Easy'", () => {
	const value = 'Easy';

	const actual = doubleLetterSplitter(value);
	const expected = [];

	expect(actual).toEqual(expected);
});
