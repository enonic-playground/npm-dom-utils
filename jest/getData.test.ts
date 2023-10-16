import {
	describe,
	expect,
	test as it
} from '@jest/globals';
import {first} from '../src/first';
import {getData} from '../src/getData';

describe('getData', () => {
	document.body.innerHTML = `<html>
	<body>
		<div data-test="value"></div>
	</body>
</html>`;
	it('returns the data', () => {
		const el = first('div') as HTMLElement;
		const value = getData(el, 'test');
		expect(value).toBe('value');
	});
});
