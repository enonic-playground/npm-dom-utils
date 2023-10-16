import {
	describe,
	expect,
	test as it
} from '@jest/globals';
import {findElements} from '../src/findElements';

describe('findElements', () => {
	document.body.innerHTML = `<html>
	<body>
		<div><div></div></div>
		<div></div>
	</body>
</html>`;
	it('returns an array of matching elements', () => {
		const els = findElements('div');
		expect(els).toHaveLength(3);
	});
	it('returns an empty array when there are no matches', () => {
		const els = findElements('h1');
		expect(els).toHaveLength(0);
	});
});
