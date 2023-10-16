import {
	describe,
	expect,
	test as it
} from '@jest/globals';
import {elementExists} from '../src/elementExists';
import {first} from '../src/first';


describe('elementExists', () => {
	document.body.innerHTML = `<html>
	<body>
		<h1>My First Heading</h1>
	</body>
</html>`;
	it('returns true when an element exists', () => {
		const el = first('h1') as Element;
		const exists = elementExists(el);
		expect(exists).toBe(true);
	});
	it("returns false when an element doesn't exists", () => {
		const el = first('h2') as Element;
		const exists = elementExists(el);
		expect(exists).toBe(false);
	});
});
