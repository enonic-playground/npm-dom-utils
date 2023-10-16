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

describe('getPosition', () => {
	it('returns the position', async () => {
		// await page.waitForSelector('#myId');
		const { left, top} = await page.evaluate(() => {
			return globalThis.getPosition(globalThis.first('#myId'));
		});
		expect(left).toBe(8);
		expect(top).toBe(0);
	});
});

afterAll(async () => {
	await browser.close();
});
