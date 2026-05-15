import puppeteer from 'puppeteer-core';

const url = 'http://localhost:4321/grow-in-china/influencers-kols';
const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: 'new',
  defaultViewport: { width: 1440, height: 900 },
  args: ['--no-sandbox'],
});

const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

// Force all reveal elements to is-in so nothing is hidden
await page.evaluate(() => {
  document.querySelectorAll('.kol-reveal').forEach((el) => el.classList.add('is-in'));
});

// Wait a tick for paint
await new Promise((r) => setTimeout(r, 400));

// Screenshot 1: directory header + chips
const directory = await page.$('#directory');
const box = await directory.boundingBox();
console.log('directory box', box);

// Clip-screenshot the top portion of the directory
await page.screenshot({
  path: '.tmp-screens/dir-top.png',
  clip: { x: 0, y: box.y, width: 1440, height: 900 },
});

// Top of first vertical (beauty)
const beauty = await page.$('#dir-beauty');
const bbox = await beauty.boundingBox();
await page.screenshot({
  path: '.tmp-screens/dir-beauty.png',
  clip: { x: 0, y: bbox.y, width: 1440, height: 1200 },
});

// Healthcare (with disclaimer)
const hc = await page.$('#dir-healthcare');
const hcbox = await hc.boundingBox();
await page.screenshot({
  path: '.tmp-screens/dir-healthcare.png',
  clip: { x: 0, y: hcbox.y, width: 1440, height: 1200 },
});

// Methodology
await page.screenshot({
  path: '.tmp-screens/dir-full.png',
  fullPage: false,
  clip: { x: 0, y: box.y, width: 1440, height: 1800 },
});

// Mobile screenshot
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await new Promise((r) => setTimeout(r, 200));
const bbox2 = await beauty.boundingBox();
await page.screenshot({
  path: '.tmp-screens/dir-mobile.png',
  clip: { x: 0, y: bbox2.y, width: 390, height: 1200 },
});

await browser.close();
console.log('done');
