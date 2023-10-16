import {
	describe,
	expect,
	test as it
} from '@jest/globals';
import {findHTMLElements} from '../src/findHTMLElements';

describe('findHTMLElements', () => {
	document.body.innerHTML = `<html>
	<body>
		<div><div></div></div>
		<div></div>
	</body>
</html>`;
	it('returns an array of matching elements', () => {
		const els = findHTMLElements('div');
		expect(els).toHaveLength(3);
	});
});
