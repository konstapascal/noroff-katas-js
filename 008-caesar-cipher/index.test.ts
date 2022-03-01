import { caesarCipher } from './index';

it("'Always-Look-on-the-Bright-Side-of-Life' to 'Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj'", () => {
	const sentence = 'Always-Look-on-the-Bright-Side-of-Life';
	const offset = 5;

	const actual = caesarCipher(sentence, offset);
	const expected = 'Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj';

	expect(actual).toBe(expected);
});

it("'A friend in need is a friend indeed' to 'U zlcyhx ch hyyx cm u zlcyhx chxyyx'", () => {
	const sentence = 'A friend in need is a friend indeed';
	const offset = 20;

	const actual = caesarCipher(sentence, offset);
	const expected = 'U zlcyhx ch hyyx cm u zlcyhx chxyyx';

	expect(actual).toBe(expected);
});
