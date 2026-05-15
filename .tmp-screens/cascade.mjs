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

// Use CDP to get matched CSS rules for the chip element
const client = await page.target().createCDPSession();
await client.send('DOM.enable');
await client.send('CSS.enable');

const { root } = await client.send('DOM.getDocument', { depth: -1, pierce: false });
const { nodeId } = await client.send('DOM.querySelector', { nodeId: root.nodeId, selector: '.kol-dir-chip' });
const styles = await client.send('CSS.getMatchedStylesForNode', { nodeId });

// Filter to rules mentioning kol-dir-chip
const matched = (styles.matchedCSSRules || []).filter(r => (r.rule.selectorList.selectors || []).some(s => s.text.includes('kol-dir-chip')));
console.log('matched rules for .kol-dir-chip:', matched.length);
matched.slice(0, 5).forEach((r, i) => {
  console.log(`-- rule ${i} --`);
  console.log('selectors:', r.rule.selectorList.selectors.map(s => s.text));
  console.log('origin:', r.rule.origin);
  console.log('properties:', (r.rule.style.cssProperties || []).map(p => `${p.name}: ${p.value}${p.disabled ? ' (DISABLED)' : ''}`).join(' | '));
  // mediaInfo
  if (r.rule.media) console.log('media:', r.rule.media.map(m => m.text).join(','));
});

// Also list ALL rules from <style> blocks that match the chip
console.log('--- all matched (any) ---');
(styles.matchedCSSRules || []).slice(0, 20).forEach((r, i) => {
  console.log(`[${i}] origin=${r.rule.origin} selectors=${r.rule.selectorList.selectors.map(s => s.text).join(', ')}`);
});

await browser.close();
