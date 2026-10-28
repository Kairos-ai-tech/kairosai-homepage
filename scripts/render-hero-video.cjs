const { spawn } = require('child_process');
const path = require('path');
const puppeteer = require('puppeteer-core');

const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const out = process.argv[2];
const fps = Number(process.env.FPS || 30);
const only = process.env.ONLY ? process.env.ONLY.split(',').map(Number) : null;
const crf = process.env.CRF || '24';
if (!out && !only) {
    console.error('usage: NODE_PATH=<dir with puppeteer-core>/node_modules node scripts/render-hero-video.cjs out.mp4');
    process.exit(1);
}

(async () => {
    const browser = await puppeteer.launch({
        executablePath: CHROME,
        headless: true,
        args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist', '--hide-scrollbars', '--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
    await page.goto('file://' + path.join(__dirname, 'hero-video', 'index.html'));
    await page.waitForFunction('window.ready === true', { timeout: 60000 });
    const duration = await page.evaluate('window.DURATION');

    if (only) {
        for (const t of only) {
            await page.evaluate((x) => window.setTime(x), t);
            await page.screenshot({ path: `${process.env.PREVIEW_DIR || '.'}/frame-${String(t).replace('.', '_')}.jpg`, type: 'jpeg', quality: 90 });
        }
        await browser.close();
        return;
    }

    const ff = spawn('ffmpeg', [
        '-y', '-f', 'image2pipe', '-framerate', String(fps), '-i', '-',
        '-c:v', 'libx264', '-preset', 'slow', '-crf', crf, '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', out
    ], { stdio: ['pipe', 'inherit', 'inherit'] });
    const frames = Math.round(duration * fps);
    for (let n = 0; n < frames; n++) {
        await page.evaluate((x) => window.setTime(x), n / fps);
        const buf = await page.screenshot({ type: 'jpeg', quality: 95 });
        if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
        if (n % 60 === 0) console.log(`frame ${n}/${frames}`);
    }
    ff.stdin.end();
    await new Promise((r) => ff.on('close', r));
    await browser.close();
})();
