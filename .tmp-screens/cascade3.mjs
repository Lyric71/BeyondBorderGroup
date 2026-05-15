import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  defaultViewport: { width: 1440, height: 900 },
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.goto('http://localhost:4321/grow-in-china/influencers-kols', { waitUntil: 'networkidle0' });
await new Promise((r) => setTimeout(r, 300));

const info = await page.evaluate(() => {
  const sh = document.styleSheets[1];
  const rules = Array.from(sh.cssRules);
  return {
    total: rules.length,
    last5: rules.slice(-5).map((r) => r.cssText.slice(0, 200)),
    firstFew: rules.slice(0, 3).map((r) => r.cssText.slice(0, 80)),
    looksFor: rules.filter((r) => r.cssText && /kol-dir|kol-platform/.test(r.cssText)).map((r) => r.cssText.slice(0, 80)),
  };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
