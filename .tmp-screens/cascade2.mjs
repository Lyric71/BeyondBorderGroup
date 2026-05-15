import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  defaultViewport: { width: 1440, height: 900 },
  args: ['--no-sandbox'],
});
const page = await browser.newPage();

page.on('console', (m) => { if (m.type() === 'error') console.log('CONSOLE ERR:', m.text()); });
page.on('pageerror', (e) => console.log('PAGE ERR:', e.message));

await page.goto('http://localhost:4321/grow-in-china/influencers-kols', { waitUntil: 'networkidle0' });
await new Promise((r) => setTimeout(r, 300));

const info = await page.evaluate(() => {
  // Count CSS rules in each stylesheet
  const sheets = Array.from(document.styleSheets);
  const summary = sheets.map((sh, i) => {
    let rules = null;
    let err = null;
    try { rules = sh.cssRules; } catch (e) { err = String(e); }
    return {
      idx: i,
      href: sh.href,
      ownerNode: sh.ownerNode ? sh.ownerNode.tagName : null,
      ownerNodeData: sh.ownerNode ? sh.ownerNode.outerHTML.slice(0, 80) : null,
      ruleCount: rules ? rules.length : null,
      err,
    };
  });
  // For each sheet, look for kol-dir rules
  const dirRules = sheets.map((sh, i) => {
    try {
      const arr = Array.from(sh.cssRules).filter((r) => r.cssText && r.cssText.includes('kol-dir'));
      return { idx: i, count: arr.length, sample: arr.slice(0, 3).map(r => r.cssText.slice(0, 100)) };
    } catch (e) {
      return { idx: i, err: String(e) };
    }
  });
  return { summary, dirRules };
});
console.log(JSON.stringify(info, null, 2));

await browser.close();
