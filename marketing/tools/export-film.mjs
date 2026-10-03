#!/usr/bin/env node
/**
 * Re-export the GeoVerse Labs film (film/index.html) to MP4, frame by frame.
 *
 * The film is a pure function of time: `?capture=1` hides the controls and exposes
 * `window.__render(t)`, so every frame is rendered deterministically — no screen
 * recording, no dropped frames.
 *
 * Requirements: Node 18+, Playwright (with a Chromium build) and ffmpeg on PATH.
 *
 *   # 1. serve the repository root (any static server works)
 *   npx http-server -p 8702 -s .
 *   # 2. export (lang = zh | en)
 *   node marketing/tools/export-film.mjs --lang zh --out /tmp/film-zh
 *   # optional: --fps 30  --from 0  --to 52  --base http://127.0.0.1:8702
 *   #           --font-css <url>  (repeatable; inject web fonts for nicer type in the export)
 *
 * Output: <out>/frames/*.jpg and <out>/geoverse-film-<lang>.mp4 (1920×1080, H.264, faststart).
 * Copy the MP4 to assets/film/ when you are happy with it.
 */
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

const args = process.argv.slice(2);
function opt(name, fallback) {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : fallback;
}
const lang = opt('lang', 'zh');
const out = opt('out', `film-export-${lang}`);
const fps = Number(opt('fps', 30));
const from = Number(opt('from', 0));
const to = Number(opt('to', 52));
const base = opt('base', 'http://127.0.0.1:8702');
const fontCss = args.flatMap((a, i) => (a === '--font-css' ? [args[i + 1]] : []));

const frames = join(out, 'frames');
mkdirSync(frames, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1.5 });
await page.goto(`${base}/film/?capture=1&lang=${lang}`, { waitUntil: 'networkidle' });
for (const url of fontCss) await page.addStyleTag({ url });
await page.evaluate(async () => {
  // load every glyph the film uses before the first frame, then re-measure the pills
  const text = document.getElementById('film').textContent + '0123456789,:.';
  for (const w of [400, 500, 600, 700, 800]) {
    for (const family of ['"Noto Sans SC"', 'Inter']) {
      try { await document.fonts.load(`${w} 40px ${family}`, text); } catch { /* family not injected */ }
    }
  }
  await window.__ready;
  window.__fit();
});

const n0 = Math.round(from * fps);
const n1 = Math.round(to * fps);
const started = Date.now();
for (let i = n0; i < n1; i++) {
  await page.evaluate((t) => window.__render(t), i / fps);
  await page.screenshot({ path: join(frames, `${String(i).padStart(5, '0')}.jpg`), type: 'jpeg', quality: 92 });
  if ((i - n0) % 150 === 0) process.stdout.write(`frame ${i}/${n1}\n`);
}
await browser.close();
console.log(`${n1 - n0} frames in ${((Date.now() - started) / 1000).toFixed(1)} s`);

const mp4 = join(out, `geoverse-film-${lang}.mp4`);
execFileSync('ffmpeg', [
  '-hide_banner', '-loglevel', 'error', '-y',
  '-framerate', String(fps), '-start_number', String(n0), '-i', join(frames, '%05d.jpg'),
  '-c:v', 'libx264', '-preset', 'slow', '-crf', '22', '-pix_fmt', 'yuv420p',
  '-movflags', '+faststart', '-tune', 'animation', mp4,
], { stdio: 'inherit' });
console.log(`→ ${mp4}`);
