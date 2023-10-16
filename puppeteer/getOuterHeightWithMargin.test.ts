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

describe('getOuterHeightWithMargin', () => {
	it('returns the outerHeightWithMargin', async () => {
		// await page.waitForSelector('#myId');
		const outerHeightWithMargin = await page.evaluate(() => {
			return globalThis.getOuterHeightWithMargin(globalThis.first('#myId'));
		});
		expect(outerHeightWithMargin).toBe(310);
	});
});

afterAll(async () => {
	await browser.close();
});
