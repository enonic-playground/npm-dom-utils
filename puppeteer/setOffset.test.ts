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

describe('setOffset', () => {
	it('changes the inner height', async () => {
		// await page.waitForSelector('#myId');

		const {left, top} = await page.evaluate(() => {
			return globalThis.getOffset(globalThis.first('#child'));
		});
		expect(left).toBe(109);
		expect(top).toBe(447);

		const {
			left: changedLeft,
			top: changedTop
		} = await page.evaluate(() => {
			return globalThis.getOffset(globalThis.setOffset(globalThis.first('#child'), {
				left: 150,
				top: 150
			}));
		});
		expect(changedLeft).toBe(left + 50);
		expect(changedTop).toBe(top + 50);
	});
});

afterAll(async () => {
	await browser.close();
});
