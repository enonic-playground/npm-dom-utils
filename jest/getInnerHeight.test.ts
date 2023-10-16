import {
	describe,
	expect,
	test as it
} from '@jest/globals';
import {first} from '../src/first';
import {getInnerHeight} from '../src/getInnerHeight';

describe('getInnerHeight', () => {
	document.body.innerHTML = `<html>
	<body>
		<div style="height: 100px; width: 100px">test</div>
	</body>
</html>`;
	it('returns the clientHeight', () => {
		const el = first('div') as HTMLElement;
		const value = getInnerHeight(el);
		expect(value).toBe(100);
	});
});
