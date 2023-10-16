import type {
	Browser,
	Page
} from 'puppeteer';

import {
	afterAll,
	beforeEach,
	describe,
	expect,
	test as it
} from '@jest/globals';
import {launch} from 'puppeteer';

let browser: Browser;
let page: Page;

beforeEach(async () => {
	browser = await launch({
		// args: ['--no-sandbox'],
		headless: 'new'
	});
	page = await browser.newPage();
	await page.goto('http://localhost:3000');
});

describe('getOffset', () => {
	it('returns the clientHeight', async () => {
		// await page.waitForSelector('#myId');
		const id = await page.evaluate(() => {
			return globalThis.getOffsetParent(globalThis.first('#child')).id;
		});
		expect(id).toBe('parent');
	});
});

afterAll(async () => {
	await browser.close();
});
