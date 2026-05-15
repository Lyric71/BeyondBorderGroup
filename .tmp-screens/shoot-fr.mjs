import puppeteer from 'puppeteer-core';

const url = 'http://localhost:4321/fr/se-developper-en-chine/influence-et-kol';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  defaultViewport: { width: 1440, height: 900 },
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.querySelectorAll('.kol-reveal').forEach((el) => el.classList.add('is-in')));
await new Promise((r) => setTimeout(r, 400));

const directory = await page.$('#directory');
const box = await directory.boundingBox();
await page.screenshot({ path: '.tmp-screens/fr-dir-top.png', clip: { x: 0, y: box.y, width: 1440, height: 900 } });

const beauty = await page.$('#dir-beauty');
const bbox = await beauty.boundingBox();
await page.screenshot({ path: '.tmp-screens/fr-dir-beauty.png', clip: { x: 0, y: bbox.y, width: 1440, height: 1200 } });

const hc = await page.$('#dir-healthcare');
const hcbox = await hc.boundingBox();
await page.screenshot({ path: '.tmp-screens/fr-dir-healthcare.png', clip: { x: 0, y: hcbox.y, width: 1440, height: 1200 } });

await browser.close();
console.log('done');
