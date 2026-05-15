import puppeteer from 'puppeteer-core';
import fs from 'fs';

const css = fs.readFileSync('.tmp-screens/dir-only.css', 'utf8');
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setContent(`<style id="t">${css}</style>`);
const out = await page.evaluate(() => {
  const sh = document.styleSheets[0];
  const rules = Array.from(sh.cssRules);
  return { count: rules.length, selectors: rules.map(r => r.selectorText || r.cssText.slice(0, 50)) };
});
console.log(JSON.stringify(out, null, 2));
await browser.close();
