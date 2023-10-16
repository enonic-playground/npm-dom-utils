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

describe('setInnerHeight', () => {
	it('changes the inner height', async () => {
		// await page.waitForSelector('#myId');

		const innerheight = await page.evaluate(() => {
			return globalThis.getInnerHeight(globalThis.first('#myId'));
		});
		expect(innerheight).toBe(110);

		const changedInnerheight = await page.evaluate(() => {
			return globalThis.getInnerHeight(globalThis.setInnerHeight(globalThis.first('#myId'), '120px'));
		});
		expect(changedInnerheight).toBe(120);
	});
});

afterAll(async () => {
	await browser.close();
});
