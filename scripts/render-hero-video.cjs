const { spawn } = require('child_process');
const path = require('path');
const puppeteer = require('puppeteer-core');

const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const out = process.argv[2];
const fps = Number(process.env.FPS || 30);
const only = process.env.ONLY ? process.env.ONLY.split(',').map(Number) : null;
const crf = process.env.CRF || '18';
const W = Number(process.env.W || 1920);
const H = Number(process.env.H || 1080);
if (!out && !only) {
    console.error('usage: [W=2560 H=1440 FPS=60 CRF=18] NODE_PATH=<dir with puppeteer-core>/node_modules node scripts/render-hero-video.cjs master.mp4');
    process.exit(1);
}

(async () => {
    const browser = await puppeteer.launch({
        executablePath: CHROME,
        headless: true,
        args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist', '--hide-scrollbars', `--window-size=${W},${H}`]
    });
    const page = await browser.newPage();
    await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
    await page.goto('file://' + path.join(__dirname, 'hero-video', 'index.html') + `?w=${W}&h=${H}`);
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
        '-c:v', 'libx264', '-preset', 'slow', '-crf', crf, '-vf', 'format=yuv420p', '-movflags', '+faststart', '-an', out
    ], { stdio: ['pipe', 'inherit', 'inherit'] });
    ff.on('error', (e) => { console.error('ffmpeg failed to start:', e.message); process.exit(1); });
    const frames = Math.round(duration * fps);
    for (let n = 0; n < frames; n++) {
        await page.evaluate((x) => window.setTime(x), n / fps);
        const buf = await page.screenshot({ type: 'jpeg', quality: 95 });
        if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
        if (n % 60 === 0) console.log(`frame ${n}/${frames}`);
    }
    ff.stdin.end();
    const code = await new Promise((r) => ff.on('close', r));
    await browser.close();
    if (code !== 0) { console.error('ffmpeg exited with', code); process.exit(code || 1); }
})();
