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

describe('getOuterWidthWithMargin', () => {
	it('returns the outerWidthWithMargin', async () => {
		// await page.waitForSelector('#myId');
		const outerWidthWithMargin = await page.evaluate(() => {
			return globalThis.getOuterWidthWithMargin(globalThis.first('#myId'));
		});
		expect(outerWidthWithMargin).toBe(300);
	});
});

afterAll(async () => {
	await browser.close();
});
