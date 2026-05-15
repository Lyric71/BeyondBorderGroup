import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  defaultViewport: { width: 1440, height: 900 },
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
const logs = [];
page.on('console', (msg) => logs.push(`[${msg.type()}] ${msg.text()}`));
page.on('pageerror', (err) => logs.push(`[pageerror] ${err.message}`));

await page.goto('http://localhost:4321/grow-in-china/influencers-kols', { waitUntil: 'networkidle0' });
await page.evaluate(() => document.querySelectorAll('.kol-reveal').forEach((el) => el.classList.add('is-in')));
await new Promise((r) => setTimeout(r, 300));

const info = await page.evaluate(() => {
  const chip = document.querySelector('.kol-dir-chip');
  const grid = document.querySelector('.kol-dir-grid');
  const card = document.querySelector('.kol-dir-card');
  const avatar = document.querySelector('.kol-dir-card__avatar');
  const head = document.querySelector('.kol-dir-vertical__head');
  const get = (el, props) => {
    if (!el) return { exists: false };
    const cs = getComputedStyle(el);
    return Object.fromEntries(props.map((p) => [p, cs.getPropertyValue(p)]));
  };
  return {
    chip: get(chip, ['display', 'padding', 'border', 'background-color', 'border-radius', 'flex-wrap']),
    grid: get(grid, ['display', 'grid-template-columns', 'gap']),
    card: get(card, ['display', 'background-color', 'border', 'border-radius', 'padding', 'flex-direction']),
    avatar: get(avatar, ['width', 'height', 'border-radius', 'background-color', 'flex-shrink']),
    head: get(head, ['display', 'justify-content', 'align-items', 'gap']),
    chipParent: getComputedStyle(document.querySelector('.kol-dir-chips')).getPropertyValue('display'),
  };
});

console.log(JSON.stringify(info, null, 2));
console.log('LOGS:', logs.slice(-20).join('\n'));

await browser.close();
