#!/usr/bin/env node
/**
 * Pull legacy WordPress images out of the live site and rewrite every
 * markdown reference to a local path under public/Images/insights/.
 *
 * Goal: drop the runtime dependency on beyondbordergroup.com/wp-content,
 * so the site keeps loading once the new Astro build replaces the old
 * WordPress install, and so it works behind the Great Firewall.
 *
 * Mapping:
 *   https://www.thechinapath.com/wp-content/uploads/<Y>/<M>/<file>
 *   -> /Images/insights/<Y>/<M>/<file>
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const CONTENT_DIRS = [
	path.join(ROOT, 'src', 'content', 'insights'),
	path.join(ROOT, 'src', 'content', 'insights-fr'),
	path.join(ROOT, 'src', 'content', 'cases'),
	path.join(ROOT, 'src', 'content', 'cases-fr'),
];

const TARGET_BASE = path.join(ROOT, 'public', 'Images', 'insights');
const URL_RE = /https:\/\/beyondbordergroup\.com\/wp-content\/uploads\/(\d{4})\/(\d{2})\/([^\s\)"'<>,]+)/g;

async function walk(dir) {
	const out = [];
	let entries;
	try {
		entries = await fs.readdir(dir, { withFileTypes: true });
	} catch {
		return out;
	}
	for (const e of entries) {
		const p = path.join(dir, e.name);
		if (e.isDirectory()) {
			out.push(...(await walk(p)));
		} else if (e.isFile() && (e.name.endsWith('.md') || e.name.endsWith('.mdx'))) {
			out.push(p);
		}
	}
	return out;
}

async function ensureDir(p) {
	await fs.mkdir(p, { recursive: true });
}

async function exists(p) {
	try {
		await fs.access(p);
		return true;
	} catch {
		return false;
	}
}

async function download(url, dest, { tries = 3 } = {}) {
	for (let attempt = 1; attempt <= tries; attempt++) {
		try {
			const res = await fetch(url, {
				headers: { 'User-Agent': 'TheChinaPath-image-localizer/1.0' },
			});
			if (!res.ok) {
				throw new Error(`HTTP ${res.status}`);
			}
			const buf = Buffer.from(await res.arrayBuffer());
			await ensureDir(path.dirname(dest));
			await fs.writeFile(dest, buf);
			return { ok: true, bytes: buf.length };
		} catch (err) {
			if (attempt === tries) {
				return { ok: false, error: err.message ?? String(err) };
			}
			await new Promise((r) => setTimeout(r, 400 * attempt));
		}
	}
	return { ok: false, error: 'unreachable' };
}

function mapUrlToLocal(url) {
	const m = url.match(/wp-content\/uploads\/(\d{4})\/(\d{2})\/(.+)$/);
	if (!m) return null;
	const [, year, month, file] = m;
	return {
		year,
		month,
		file,
		localFs: path.join(TARGET_BASE, year, month, file),
		localUrl: `/Images/insights/${year}/${month}/${file}`,
	};
}

async function main() {
	const files = (await Promise.all(CONTENT_DIRS.map(walk))).flat();
	if (!files.length) {
		console.error('No markdown content found.');
		process.exit(1);
	}
	console.log(`Scanning ${files.length} markdown files...`);

	const urlSet = new Set();
	const fileToUrls = new Map();
	for (const f of files) {
		const text = await fs.readFile(f, 'utf8');
		const matches = text.matchAll(URL_RE);
		const inFile = new Set();
		for (const m of matches) {
			urlSet.add(m[0]);
			inFile.add(m[0]);
		}
		if (inFile.size) fileToUrls.set(f, inFile);
	}

	console.log(
		`Found ${urlSet.size} unique URLs across ${fileToUrls.size} files. Downloading...`,
	);

	let downloaded = 0;
	let skippedExisting = 0;
	let failed = 0;
	const failures = [];

	for (const url of urlSet) {
		const mapped = mapUrlToLocal(url);
		if (!mapped) {
			failures.push({ url, error: 'unmappable' });
			failed++;
			continue;
		}
		if (await exists(mapped.localFs)) {
			skippedExisting++;
			continue;
		}
		const res = await download(url, mapped.localFs);
		if (res.ok) {
			downloaded++;
			console.log(`  ok  ${url} -> ${path.relative(ROOT, mapped.localFs)} (${(res.bytes / 1024).toFixed(0)} KB)`);
		} else {
			failed++;
			failures.push({ url, error: res.error });
			console.log(`  FAIL  ${url}  (${res.error})`);
		}
	}

	console.log(`\nDownload summary: ${downloaded} downloaded, ${skippedExisting} skipped (already local), ${failed} failed.`);

	if (failed > 0) {
		console.log('\nFailures:');
		for (const f of failures) console.log(`  ${f.url}  ->  ${f.error}`);
		console.log('\nNot rewriting markdown until every URL is local. Re-run after resolving the failures above.');
		process.exit(1);
	}

	console.log(`\nRewriting markdown references in ${fileToUrls.size} files...`);
	let rewrittenFiles = 0;
	let totalReplacements = 0;
	for (const [file, urls] of fileToUrls) {
		let text = await fs.readFile(file, 'utf8');
		let fileReplacements = 0;
		for (const url of urls) {
			const mapped = mapUrlToLocal(url);
			if (!mapped) continue;
			const before = text;
			text = text.split(url).join(mapped.localUrl);
			if (text !== before) {
				const occurrences = before.split(url).length - 1;
				fileReplacements += occurrences;
			}
		}
		if (fileReplacements > 0) {
			await fs.writeFile(file, text, 'utf8');
			rewrittenFiles++;
			totalReplacements += fileReplacements;
		}
	}
	console.log(`Rewrote ${totalReplacements} URL occurrences across ${rewrittenFiles} files.`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
