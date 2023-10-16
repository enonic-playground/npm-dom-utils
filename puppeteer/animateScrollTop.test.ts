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

describe('animateScrollTop', () => {
	it('scrolls', async () => {
		// await page.waitForSelector('#myId');
		const scrollTop = await page.evaluate(() => {
			return globalThis.first('#myId').scrollTop;
		});
		expect(scrollTop).toBe(0);

		await page.evaluate(async () => {
			globalThis.animateScrollTop(globalThis.first('#myId'), 1000, 1, () => {});
		});

		const wait = (ms) => new Promise(res => setTimeout(res, ms));
		await wait(100);

		const changedScrollTop = await page.evaluate(async () => {
			return globalThis.first('#myId').scrollTop;
		});

		expect(changedScrollTop).toBe(520);

	});
});

afterAll(async () => {
	await browser.close();
});
