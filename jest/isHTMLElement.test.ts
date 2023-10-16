import {
	describe,
	expect,
	test as it
} from '@jest/globals';
import {first} from '../src/first';
import {isHTMLElement} from '../src/isHTMLElement';

describe('isHTMLElement', () => {
	document.body.innerHTML = `<html>
	<body>
		<h1>My First Heading</h1>
	</body>
</html>`;
	it('returns true when "element" is an HTMLElement', () => {
		const el = first('h1');
		expect(isHTMLElement(el)).toBe(true);
	});
	it('returns false when the "element" is not an HTMLElement', () => {
		const el = first('h2');
		expect(isHTMLElement(el)).toBe(false);
	});
});
