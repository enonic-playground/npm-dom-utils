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
// import {first} from '../src/first';
// import {getInnerHeight} from '../src/getInnerHeight';

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

describe('getInnerHeight', () => {
	it('returns the clientHeight', async () => {
		// await page.waitForSelector('#myId');
		const innerHeight = await page.evaluate(() => {
			return globalThis.getInnerHeight(globalThis.first('#myId'));
		});
		expect(innerHeight).toBe(110);
	});
});

afterAll(async () => {
	await browser.close();
});
