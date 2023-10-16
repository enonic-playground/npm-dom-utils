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
		const { top, left } = await page.evaluate(() => {
			return globalThis.getOffset(globalThis.first('#myId'));
		});
		expect(top).toBe(100);
		expect(left).toBe(108);
	});
});

afterAll(async () => {
	await browser.close();
});
