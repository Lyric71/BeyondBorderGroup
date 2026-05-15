import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.goto('http://localhost:4321/grow-in-china/influencers-kols', { waitUntil: 'networkidle0' });
await new Promise((r) => setTimeout(r, 300));

const info = await page.evaluate(() => {
  const sh = document.styleSheets[1];
  const rules = Array.from(sh.cssRules);
  // find index of kol-platform__desc and what comes immediately after
  const i = rules.findIndex((r) => r.cssText && r.cssText.includes('.kol-platform__desc'));
  // find first rule starting with .kol-faq
  const j = rules.findIndex((r) => r.cssText && r.cssText.startsWith('.kol-faq'));
  return {
    total: rules.length,
    pdescIdx: i,
    faqStartIdx: j,
    between: rules.slice(i, j + 1).map((r) => (r.cssText || '').slice(0, 120)),
  };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
