import {
	describe,
	expect,
	test as it
} from '@jest/globals';
import {first} from '../src/first';

describe('first', () => {
	document.body.innerHTML = `<html>
	<body>
		<h1>My First Heading</h1>
	</body>
</html>`;
	it('returns the first matching element', () => {
		const el = first('h1');
		expect(el?.outerHTML).toBe('<h1>My First Heading</h1>');
		const el2 = first('h2');
		expect(el2).toBeNull();
	});
	it('returns null when no matches are found', () => {
		const el = first('h2');
		expect(el).toBeNull();
	});
});
