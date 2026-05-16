import { chromium } from 'playwright';
const [,, url, out, width, selector] = process.argv;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: +width || 390, height: 844 }, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(1000);
if (selector) {
  const el = page.locator(selector).first();
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await el.screenshot({ path: out });
} else {
  await page.screenshot({ path: out, fullPage: true });
}
await browser.close();
console.log('saved', out);
