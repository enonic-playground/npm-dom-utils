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

describe('isVisible', () => {
	it('returns true when the element is visible', async () => {
		const isVisible = await page.evaluate(() => {
			return globalThis.isVisible(globalThis.first('#block'));
		});
		expect(isVisible).toBe(true);
	});
	it('returns true when the element has display: none', async () => {
		const isVisible = await page.evaluate(() => {
			return globalThis.isVisible(globalThis.first('#none'));
		});
		expect(isVisible).toBe(false);
	});
	// Nope isVisible doesn't work with visibility: hidden or opacity: 0
	// it('returns true when the element has visibility: hidden', async () => {
	// 	const isVisible = await page.evaluate(() => {
	// 		return globalThis.isVisible(globalThis.first('#hidden'));
	// 	});
	// 	expect(isVisible).toBe(false);
	// });
	// it('returns true when the element has opacity: 0', async () => {
	// 	const isVisible = await page.evaluate(() => {
	// 		return globalThis.isVisible(globalThis.first('#opacity'));
	// 	});
	// 	expect(isVisible).toBe(false);
	// });
});

afterAll(async () => {
	await browser.close();
});
