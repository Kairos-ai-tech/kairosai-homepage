# Our Journey + iTech AR + Rebar Spec Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Our Journey" legacy-recap section, an expanded iTech rebar spec block, and a new "iTech AR" in-development feature block to the static marketing site, fully localized across all 8 supported languages.

**Architecture:** Pure additions to the existing single-page site (`index.html`, `styles.css`, `script.js`). No new JS behavior — reuses the existing `[data-reveal]` scroll-reveal mechanism and established visual patterns (`.section-tag`, `.product-feature` chips, `.service-card` panels). Section numbering (`01 —` … `05 —`) shifts by one to make room for the new Journey section.

**Tech Stack:** Vanilla HTML/CSS/JS, no build step.

## Global Constraints

- No new dependencies, no new JS interactivity/components (per spec: reuse scroll-reveal + `.product-card`-family styling only).
- All new user-facing copy must get `data-i18n` attributes and matching keys added to **all 8** language blocks in `script.js` (`en`, `zh-TW`, `ja`, `es`, `it`, `fr`, `ko`, `de`) — the codebase actually ships 8 languages (verified in `script.js`), not the 4 documented in `CLAUDE.md`.
- Legacy copy in the Journey section must be adapted from real prior copy (commit `7c1afb2^:index.html`), not invented from scratch.
- The AR feature must be labeled "In Development" — do not present it as a shipped product.
- Do not fabricate unverifiable stats (e.g. no invented turnaround-time number). Reuse only metrics already established elsewhere on the site (10×, 99%).
- Do not touch the pre-existing uncommitted `index.html`/`sitemap.xml` diff already in the working tree (title/meta copy + sitemap lastmod dates) — preserve it as-is.
- Preserve existing section IDs used for nav anchors (`#how`, `#product`, `#services`, `#about`, `#contact`) — only the numeric tag labels shift, not the `id`s.

---

### Task 1: Add "Our Journey" section (HTML + CSS)

**Files:**
- Modify: `index.html` (insert new `<section id="journey">` between the Hero section, which ends at line 454, and the `<!-- How it works -->` section starting at line 456; also update `.section-tag` numbers in the `how`, `product`, `services`, `about`, `contact` sections)
- Modify: `styles.css` (append new `.journey` rules after the `SERVICES / CAPABILITIES` block, before the `ABOUT` block comment — insert new block at end of file is also fine; add before `/* ============================================================ ABOUT` if that comment exists, otherwise append near line 375)

**Interfaces:**
- Produces: section `id="journey"`, CSS classes `.journey`, `.journey-grid`, `.journey-panel`, `.journey-panel--then`, `.journey-panel--now`, `.journey-era`, `.journey-tagline`, `.journey-desc`, `.journey-chips`, `.journey-chip`, `.journey-chip--legacy`, `.journey-connector`. Later tasks (2, 3) don't depend on these.

- [ ] **Step 1: Insert the Journey section markup into `index.html`**

Insert immediately after the closing `</section>` of the Hero (line 454) and before `<!-- How it works -->` (line 456):

```html
        <!-- Our Journey -->
        <section id="journey" class="journey">
            <div class="container">
                <div class="section-header" data-reveal>
                    <div class="section-tag">01 — <span data-i18n="nav.journey">Our Journey</span></div>
                    <h2 class="section-title" data-i18n="journey.title">From Smart Factory to AEC</h2>
                    <p class="section-subtitle" data-i18n="journey.subtitle">We started broad, building AI for manufacturing. We narrowed to one deep, focused product for construction.</p>
                </div>
                <div class="journey-grid">
                    <div class="journey-panel journey-panel--then" data-reveal style="--d:0s">
                        <div class="journey-era" data-i18n="journey.then.era">2020 — 2024</div>
                        <p class="journey-tagline" data-i18n="journey.then.tagline">"Make Every Moment Count"</p>
                        <p class="journey-desc" data-i18n="journey.then.desc">Our mission was to reshape how people experience and manage time through AI — helping traditional manufacturing companies undergo digital transformation with AI-driven systems, data analytics, and intelligent automation.</p>
                        <div class="journey-chips">
                            <span class="journey-chip journey-chip--legacy" data-i18n="journey.then.chip1">Smart Factory</span>
                            <span class="journey-chip journey-chip--legacy" data-i18n="journey.then.chip2">Digital Transformation</span>
                            <span class="journey-chip journey-chip--legacy" data-i18n="journey.then.chip3">Factory Process Optimization</span>
                            <span class="journey-chip journey-chip--legacy" data-i18n="journey.then.chip4">Data Analysis</span>
                        </div>
                    </div>
                    <div class="journey-connector" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </div>
                    <div class="journey-panel journey-panel--now" data-reveal style="--d:0.12s">
                        <div class="journey-era" data-i18n="journey.now.era">2025 — Now</div>
                        <p class="journey-tagline" data-i18n="journey.now.tagline">AI Rebar Estimation Built for Construction</p>
                        <p class="journey-desc" data-i18n="journey.now.desc">We narrowed our focus to iTech — an end-to-end AI system that turns construction drawings into accurate rebar estimates and bar-bending schedules for the AEC industry.</p>
                        <div class="journey-chips">
                            <span class="journey-chip" data-i18n="journey.now.chip1">AI Rebar Estimation</span>
                            <span class="journey-chip" data-i18n="journey.now.chip2">Rebar Takeoff</span>
                            <span class="journey-chip" data-i18n="journey.now.chip3">AEC</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

```

- [ ] **Step 2: Renumber the section tags in the sections that follow**

In `index.html`, update these five existing `.section-tag` lines (each currently under a `<!-- ... -->` comment block matching the section):

Line ~460 (`<!-- How it works -->` section), change:
```html
                    <div class="section-tag">01 — <span data-i18n="nav.how">How it works</span></div>
```
to:
```html
                    <div class="section-tag">02 — <span data-i18n="nav.how">How it works</span></div>
```

Line ~497 (`<!-- iTech showcase -->` section), change:
```html
                    <div class="section-tag">02 — <span>Product</span></div>
```
to:
```html
                    <div class="section-tag">03 — <span>Product</span></div>
```

Line ~536 (`<!-- Services / capabilities -->` section), change:
```html
                    <div class="section-tag">03 — <span data-i18n="nav.services">Services</span></div>
```
to:
```html
                    <div class="section-tag">04 — <span data-i18n="nav.services">Services</span></div>
```

Line ~573 (`<!-- Company / about -->` section), change:
```html
                    <div class="section-tag">04 — <span data-i18n="nav.about">Company</span></div>
```
to:
```html
                    <div class="section-tag">05 — <span data-i18n="nav.about">Company</span></div>
```

Line ~610 (`<!-- Contact -->` section), change:
```html
                        <div class="section-tag">05 — <span data-i18n="nav.contact">Contact</span></div>
```
to:
```html
                        <div class="section-tag">06 — <span data-i18n="nav.contact">Contact</span></div>
```

- [ ] **Step 3: Add a nav link for the new section**

In the `<ul class="nav-menu" id="navMenu">` block (around line 347-353), insert a new `<li>` right before the `#how` link:

```html
                    <li><a href="#journey" class="nav-link" data-i18n="nav.journey">Our Journey</a></li>
```

- [ ] **Step 4: Add the Journey CSS**

Append this block to `styles.css`, right after the `SERVICES / CAPABILITIES` block ends (after the `.service-card:hover::before { opacity: 1; }` rule, before the `ABOUT` section comment):

```css
/* ============================================================
   OUR JOURNEY
   ============================================================ */
.journey-grid { display: grid; grid-template-columns: 1fr auto 1fr; gap: clamp(20px, 3vw, 40px); align-items: center; }
.journey-panel {
    padding: 32px 30px; border: 1px solid var(--line); border-radius: var(--radius);
    background: var(--panel); backdrop-filter: blur(8px);
}
.journey-panel--then { opacity: 0.72; border-style: dashed; }
.journey-era { font-family: var(--font-mono); font-size: 0.74rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--faint); margin-bottom: 12px; }
.journey-panel--now .journey-era { color: var(--amber); }
.journey-tagline { font-family: var(--font-display); font-weight: 600; font-size: 1.4rem; text-transform: uppercase; line-height: 1.1; margin-bottom: 14px; }
.journey-desc { color: var(--muted); font-size: 0.98rem; }
.journey-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 22px; }
.journey-chip {
    font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.05em; padding: 6px 12px;
    border: 1px solid var(--line); border-radius: 100px; color: var(--paper); background: rgba(91, 200, 255, 0.05);
}
.journey-chip--legacy { color: var(--faint); border-color: var(--line-2); background: transparent; }
.journey-connector { width: 40px; height: 40px; color: var(--cyan); justify-self: center; }
.journey-connector svg { width: 100%; height: 100%; }

```

- [ ] **Step 5: Manual verification**

Run: `python -m http.server 8000` from the repo root, open `http://localhost:8000`, and confirm:
- New "Our Journey" section renders between Hero and How-it-works, with a muted "then" panel and an accented "now" panel.
- Nav bar shows "Our Journey" and scrolling to it via the nav link works.
- Section tags below now read 02/03/04/05/06 in order.

- [ ] **Step 6: Commit**

```bash
git add index.html styles.css
git commit -m "Add Our Journey section recapping legacy positioning"
```

---

### Task 2: Expand the iTech rebar spec block

**Files:**
- Modify: `index.html` (inside `<!-- iTech showcase -->` section, `.product-copy` div, around what is now line ~503-511 pre-Task-1 numbering — locate by the `<div class="product-features">` block)
- Modify: `styles.css` (append `.product-specs` rules after the existing `.product-cta { display: inline-flex; }` rule)

**Interfaces:**
- Consumes: nothing from Task 1.
- Produces: CSS class `.product-specs`, `.product-spec`. No dependents in later tasks.

- [ ] **Step 1: Insert the spec list into `index.html`**

Immediately after the closing `</div>` of `<div class="product-features">...</div>` and before the `<a href="https://itech.kairosaitech.com/" ... class="btn btn-primary product-cta">` link, insert:

```html
                    <ul class="product-specs">
                        <li class="product-spec"><span class="product-spec-label" data-i18n="products.itech.spec1Label">Input</span><span class="product-spec-value" data-i18n="products.itech.spec1Value">Construction drawings — DWG or PDF</span></li>
                        <li class="product-spec"><span class="product-spec-label" data-i18n="products.itech.spec2Label">Output</span><span class="product-spec-value" data-i18n="products.itech.spec2Value">Rebar takeoff + bar-bending schedule, exportable as CSV/Excel</span></li>
                        <li class="product-spec"><span class="product-spec-label" data-i18n="products.itech.spec3Label">Pipeline</span><span class="product-spec-value" data-i18n="products.itech.spec3Value">Upload → AI detection → estimate &amp; schedule</span></li>
                    </ul>
```

- [ ] **Step 2: Add the spec-list CSS**

Append to `styles.css` right after `.product-cta { display: inline-flex; }`:

```css
.product-specs { display: grid; gap: 10px; margin: 0 0 30px; }
.product-spec { display: flex; gap: 14px; font-size: 0.92rem; padding-bottom: 10px; border-bottom: 1px dashed var(--line-2); }
.product-spec-label { font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--cyan); flex: 0 0 90px; }
.product-spec-value { color: var(--muted); }
```

- [ ] **Step 3: Manual verification**

Reload `http://localhost:8000`, confirm the Product section now shows a 3-row spec list (Input/Output/Pipeline) between the feature chips and the "Learn More" button, styled consistently with the rest of the card.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "Add rebar-estimation spec list to iTech product section"
```

---

### Task 3: Add the "iTech AR" in-development block

**Files:**
- Modify: `index.html` (inside `<!-- iTech showcase -->` section, add a new full-width block after the existing `.container` grid — i.e. after the closing `</div>` of `.schedule`, still inside `<section id="product">`, before that section's closing `</section>`)
- Modify: `styles.css` (append new `.ar-block` rules after the `iTECH PRODUCT SHOWCASE` block, before `SERVICES / CAPABILITIES`)

**Interfaces:**
- Consumes: nothing from Tasks 1-2.
- Produces: nothing consumed later.

- [ ] **Step 1: Insert the AR block markup into `index.html`**

The `<!-- iTech showcase -->` section currently ends with:
```html
                    <div class="schedule-foot"><span>5 marks · 214 bars</span><b>TOTAL 757 kg</b></div>
                </div>
            </div>
        </section>
```
Change the closing `</div></div></section>` to insert a new full-width block before `</div>` (the outer `.container` close):

```html
                    <div class="schedule-foot"><span>5 marks · 214 bars</span><b>TOTAL 757 kg</b></div>
                </div>
                <div class="ar-block" data-reveal>
                    <div class="ar-badge"><span data-i18n="products.itechAr.badge">In Development</span></div>
                    <h3 class="ar-title" data-i18n="products.itechAr.title">iTech AR</h3>
                    <p class="ar-desc" data-i18n="products.itechAr.desc">A camera-based AR view for the job site — point a phone or tablet at the structure and see the AI-detected rebar layout overlaid on the physical bars in real time, for fast on-site verification against the drawing.</p>
                    <ul class="ar-features">
                        <li><span class="ar-feature-num">01</span><span data-i18n="products.itechAr.feature1">Real-time AR overlay of detected rebar and bar-bending schedule onto the camera view</span></li>
                        <li><span class="ar-feature-num">02</span><span data-i18n="products.itechAr.feature2">Flags discrepancies between the physical site and the drawing</span></li>
                        <li><span class="ar-feature-num">03</span><span data-i18n="products.itechAr.feature3">Offline capture mode for sites without reliable connectivity</span></li>
                        <li><span class="ar-feature-num">04</span><span data-i18n="products.itechAr.feature4">Exportable on-site verification report</span></li>
                    </ul>
                </div>
            </div>
        </section>
```

- [ ] **Step 2: Add the AR block CSS**

Append to `styles.css` right after the `iTECH PRODUCT SHOWCASE` block (after `.schedule-foot b { color: var(--amber); }`), before the `SERVICES / CAPABILITIES` comment:

```css
/* iTech AR (in development) */
.ar-block {
    grid-column: 1 / -1; margin-top: clamp(30px, 4vw, 56px); padding: 32px clamp(24px, 4vw, 44px);
    border: 1px dashed var(--line); border-radius: var(--radius); background: var(--panel-2);
}
.ar-badge {
    display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; margin-bottom: 16px;
    border: 1px solid var(--amber); border-radius: 100px; background: rgba(255, 155, 61, 0.08);
    font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--amber);
}
.ar-badge::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--amber); box-shadow: 0 0 8px var(--amber); animation: pulse 2s infinite; }
.ar-title { font-family: var(--font-display); font-weight: 600; font-size: clamp(1.8rem, 3vw, 2.4rem); text-transform: uppercase; margin-bottom: 12px; }
.ar-desc { color: var(--muted); max-width: 68ch; margin-bottom: 22px; }
.ar-features { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px 30px; }
.ar-features li { display: flex; gap: 12px; font-size: 0.92rem; color: var(--paper); align-items: baseline; }
.ar-feature-num { font-family: var(--font-mono); font-size: 0.74rem; color: var(--cyan); flex-shrink: 0; }
```

Also update the responsive rule in `styles.css` (currently `@media (max-width: 760px) { ... }`) — find `.ar-features` isn't present yet so add a stacking rule; append inside the existing `@media (max-width: 760px)` block (do not create a duplicate media query):

```css
    .ar-features { grid-template-columns: 1fr; }
```

- [ ] **Step 3: Manual verification**

Reload `http://localhost:8000`, confirm a dashed-border "iTech AR" panel appears below the bar-bending-schedule table, spanning the full section width, with an amber pulsing "In Development" badge and a 2-column (1-column on mobile) feature list.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "Add iTech AR in-development spec block"
```

---

### Task 4: Add all new i18n keys across all 8 languages

**Files:**
- Modify: `script.js` (each of the 8 language blocks inside `const translations = { ... }`, lines 6-557)

**Interfaces:**
- Consumes: the exact key names introduced in Tasks 1-3 (`nav.journey`, `journey.title`, `journey.subtitle`, `journey.then.era`, `journey.then.tagline`, `journey.then.desc`, `journey.then.chip1..4`, `journey.now.era`, `journey.now.tagline`, `journey.now.desc`, `journey.now.chip1..3`, `products.itech.spec1Label`, `products.itech.spec1Value`, `products.itech.spec2Label`, `products.itech.spec2Value`, `products.itech.spec3Label`, `products.itech.spec3Value`, `products.itechAr.badge`, `products.itechAr.title`, `products.itechAr.desc`, `products.itechAr.feature1..4`).
- Produces: nothing consumed later.

- [ ] **Step 1: Add keys to the `en` block**

In `script.js`, insert right before the closing `},` of the `en` block (currently ending at line 74 with `'products.itech.aria': ...`):

```javascript
        'nav.journey': 'Our Journey',
        'journey.title': 'From Smart Factory to AEC',
        'journey.subtitle': 'We started broad, building AI for manufacturing. We narrowed to one deep, focused product for construction.',
        'journey.then.era': '2020 — 2024',
        'journey.then.tagline': '"Make Every Moment Count"',
        'journey.then.desc': 'Our mission was to reshape how people experience and manage time through AI — helping traditional manufacturing companies undergo digital transformation with AI-driven systems, data analytics, and intelligent automation.',
        'journey.then.chip1': 'Smart Factory',
        'journey.then.chip2': 'Digital Transformation',
        'journey.then.chip3': 'Factory Process Optimization',
        'journey.then.chip4': 'Data Analysis',
        'journey.now.era': '2025 — Now',
        'journey.now.tagline': 'AI Rebar Estimation Built for Construction',
        'journey.now.desc': 'We narrowed our focus to iTech — an end-to-end AI system that turns construction drawings into accurate rebar estimates and bar-bending schedules for the AEC industry.',
        'journey.now.chip1': 'AI Rebar Estimation',
        'journey.now.chip2': 'Rebar Takeoff',
        'journey.now.chip3': 'AEC',
        'products.itech.spec1Label': 'Input',
        'products.itech.spec1Value': 'Construction drawings — DWG or PDF',
        'products.itech.spec2Label': 'Output',
        'products.itech.spec2Value': 'Rebar takeoff + bar-bending schedule, exportable as CSV/Excel',
        'products.itech.spec3Label': 'Pipeline',
        'products.itech.spec3Value': 'Upload → AI detection → estimate & schedule',
        'products.itechAr.badge': 'In Development',
        'products.itechAr.title': 'iTech AR',
        'products.itechAr.desc': 'A camera-based AR view for the job site — point a phone or tablet at the structure and see the AI-detected rebar layout overlaid on the physical bars in real time, for fast on-site verification against the drawing.',
        'products.itechAr.feature1': 'Real-time AR overlay of detected rebar and bar-bending schedule onto the camera view',
        'products.itechAr.feature2': 'Flags discrepancies between the physical site and the drawing',
        'products.itechAr.feature3': 'Offline capture mode for sites without reliable connectivity',
        'products.itechAr.feature4': 'Exportable on-site verification report',
```

- [ ] **Step 2: Add keys to the `'zh-TW'` block**

Insert before that block's closing `},`:

```javascript
        'nav.journey': '我們的歷程',
        'journey.title': '從智慧工廠到 AEC',
        'journey.subtitle': '我們從廣泛的製造業 AI 出發，最終聚焦成一個為營建產業打造的深度產品。',
        'journey.then.era': '2020 — 2024',
        'journey.then.tagline': '「讓每一刻都有價值」',
        'journey.then.desc': '我們的使命是透過 AI 重新定義人們體驗與管理時間的方式——協助傳統製造業運用 AI 系統、數據分析與智慧自動化進行數位轉型。',
        'journey.then.chip1': '智慧工廠',
        'journey.then.chip2': '數位轉型',
        'journey.then.chip3': '製程優化',
        'journey.then.chip4': '數據分析',
        'journey.now.era': '2025 — 現在',
        'journey.now.tagline': '為營建打造的 AI 鋼筋估算',
        'journey.now.desc': '我們將焦點收斂到 iTech——一套端到端 AI 系統，將施工圖轉換為精準的鋼筋估算與斷料彎曲表，服務 AEC 產業。',
        'journey.now.chip1': 'AI 鋼筋估算',
        'journey.now.chip2': '鋼筋翻樣',
        'journey.now.chip3': 'AEC',
        'products.itech.spec1Label': '輸入',
        'products.itech.spec1Value': '施工圖 — DWG 或 PDF',
        'products.itech.spec2Label': '輸出',
        'products.itech.spec2Value': '鋼筋估算與斷料彎曲表，可匯出 CSV/Excel',
        'products.itech.spec3Label': '流程',
        'products.itech.spec3Value': '上傳 → AI 偵測 → 估算與排程',
        'products.itechAr.badge': '開發中',
        'products.itechAr.title': 'iTech AR',
        'products.itechAr.desc': '以相機為基礎的工地 AR 檢視——用手機或平板對準結構體，即可看到 AI 偵測的鋼筋配置即時疊加在實體鋼筋上，快速進行現場對圖核對。',
        'products.itechAr.feature1': '即時將偵測到的鋼筋與斷料彎曲表以 AR 疊加於相機畫面',
        'products.itechAr.feature2': '標示現場實況與施工圖之間的差異',
        'products.itechAr.feature3': '支援離線擷取模式，適用網路不穩定的工地',
        'products.itechAr.feature4': '可匯出現場核對報告',
```

- [ ] **Step 3: Add keys to the `ja` block**

Insert before that block's closing `},`:

```javascript
        'nav.journey': '私たちの歩み',
        'journey.title': 'スマートファクトリーからAECへ',
        'journey.subtitle': '製造業向けの幅広いAIから始まり、建設業向けの一つの深い製品へと焦点を絞りました。',
        'journey.then.era': '2020 — 2024',
        'journey.then.tagline': '「すべての瞬間を大切に」',
        'journey.then.desc': '私たちの使命は、AIを通じて人々が時間を体験し管理する方法を再構築することでした。AI駆動のシステム、データ分析、インテリジェントな自動化により、従来の製造業のデジタルトランスフォーメーションを支援していました。',
        'journey.then.chip1': 'スマートファクトリー',
        'journey.then.chip2': 'デジタルトランスフォーメーション',
        'journey.then.chip3': '工程最適化',
        'journey.then.chip4': 'データ分析',
        'journey.now.era': '2025 — 現在',
        'journey.now.tagline': '建設業のためのAI鉄筋積算',
        'journey.now.desc': '私たちは焦点をiTechに絞りました。施工図面を正確な鉄筋積算と配筋表に変換する、AEC業界向けのエンドツーエンドAIシステムです。',
        'journey.now.chip1': 'AI鉄筋積算',
        'journey.now.chip2': '鉄筋拾い出し',
        'journey.now.chip3': 'AEC',
        'products.itech.spec1Label': '入力',
        'products.itech.spec1Value': '施工図面 — DWGまたはPDF',
        'products.itech.spec2Label': '出力',
        'products.itech.spec2Value': '鉄筋積算と配筋表、CSV/Excelで出力可能',
        'products.itech.spec3Label': 'パイプライン',
        'products.itech.spec3Value': 'アップロード → AI検出 → 積算とスケジュール作成',
        'products.itechAr.badge': '開発中',
        'products.itechAr.title': 'iTech AR',
        'products.itechAr.desc': '現場向けカメラベースのAR表示。スマートフォンやタブレットを構造物に向けると、AIが検出した鉄筋配置がリアルタイムで実物の鉄筋に重ねて表示され、現場での図面照合を迅速に行えます。',
        'products.itechAr.feature1': '検出された鉄筋と配筋表をカメラ映像にリアルタイムでARオーバーレイ表示',
        'products.itechAr.feature2': '現場の実物と図面との差異を検出・表示',
        'products.itechAr.feature3': '通信が不安定な現場向けのオフライン撮影モード',
        'products.itechAr.feature4': '現場照合レポートの出力',
```

- [ ] **Step 4: Add keys to the `es` block**

Insert before that block's closing `},`:

```javascript
        'nav.journey': 'Nuestra Trayectoria',
        'journey.title': 'De Fábrica Inteligente a AEC',
        'journey.subtitle': 'Empezamos con un enfoque amplio en IA para manufactura. Nos concentramos en un solo producto profundo para la construcción.',
        'journey.then.era': '2020 — 2024',
        'journey.then.tagline': '"Haz que cada momento cuente"',
        'journey.then.desc': 'Nuestra misión era transformar cómo las personas experimentan y gestionan el tiempo mediante IA, ayudando a empresas manufactureras tradicionales en su transformación digital con sistemas impulsados por IA, análisis de datos y automatización inteligente.',
        'journey.then.chip1': 'Fábrica Inteligente',
        'journey.then.chip2': 'Transformación Digital',
        'journey.then.chip3': 'Optimización de Procesos',
        'journey.then.chip4': 'Análisis de Datos',
        'journey.now.era': '2025 — Actualidad',
        'journey.now.tagline': 'Estimación de Armadura con IA para Construcción',
        'journey.now.desc': 'Concentramos nuestro enfoque en iTech, un sistema de IA integral que convierte planos de construcción en estimaciones precisas de armadura y planillas de doblado, para la industria AEC.',
        'journey.now.chip1': 'Estimación de Armadura con IA',
        'journey.now.chip2': 'Despiece de Armadura',
        'journey.now.chip3': 'AEC',
        'products.itech.spec1Label': 'Entrada',
        'products.itech.spec1Value': 'Planos de construcción — DWG o PDF',
        'products.itech.spec2Label': 'Salida',
        'products.itech.spec2Value': 'Despiece de armadura y planilla de doblado, exportable a CSV/Excel',
        'products.itech.spec3Label': 'Proceso',
        'products.itech.spec3Value': 'Subir → Detección con IA → Estimación y planilla',
        'products.itechAr.badge': 'En Desarrollo',
        'products.itechAr.title': 'iTech AR',
        'products.itechAr.desc': 'Una vista de realidad aumentada basada en cámara para la obra — apunta un teléfono o tableta hacia la estructura y ve la disposición de armadura detectada por IA superpuesta en tiempo real sobre las barras físicas, para una verificación rápida en obra contra el plano.',
        'products.itechAr.feature1': 'Superposición AR en tiempo real de la armadura detectada y la planilla de doblado sobre la vista de cámara',
        'products.itechAr.feature2': 'Señala discrepancias entre la obra física y el plano',
        'products.itechAr.feature3': 'Modo de captura sin conexión para obras sin conectividad confiable',
        'products.itechAr.feature4': 'Informe de verificación en obra exportable',
```

- [ ] **Step 5: Add keys to the `it` block**

Insert before that block's closing `},`:

```javascript
        'nav.journey': 'Il Nostro Percorso',
        'journey.title': 'Dalla Smart Factory all\'AEC',
        'journey.subtitle': 'Siamo partiti da un\'IA generica per la manifattura. Ci siamo concentrati su un unico prodotto profondo per l\'edilizia.',
        'journey.then.era': '2020 — 2024',
        'journey.then.tagline': '"Fai contare ogni momento"',
        'journey.then.desc': 'La nostra missione era trasformare il modo in cui le persone vivono e gestiscono il tempo attraverso l\'IA, aiutando le aziende manifatturiere tradizionali nella trasformazione digitale con sistemi basati su IA, analisi dei dati e automazione intelligente.',
        'journey.then.chip1': 'Smart Factory',
        'journey.then.chip2': 'Trasformazione Digitale',
        'journey.then.chip3': 'Ottimizzazione dei Processi',
        'journey.then.chip4': 'Analisi dei Dati',
        'journey.now.era': '2025 — Oggi',
        'journey.now.tagline': 'Stima Armature AI per l\'Edilizia',
        'journey.now.desc': 'Ci siamo concentrati su iTech, un sistema IA end-to-end che trasforma i disegni edili in stime accurate delle armature e distinte di piegatura, per il settore AEC.',
        'journey.now.chip1': 'Stima Armature AI',
        'journey.now.chip2': 'Computo Armature',
        'journey.now.chip3': 'AEC',
        'products.itech.spec1Label': 'Input',
        'products.itech.spec1Value': 'Disegni edili — DWG o PDF',
        'products.itech.spec2Label': 'Output',
        'products.itech.spec2Value': 'Computo armature e distinta di piegatura, esportabile in CSV/Excel',
        'products.itech.spec3Label': 'Flusso',
        'products.itech.spec3Value': 'Caricamento → Rilevamento IA → Stima e distinta',
        'products.itechAr.badge': 'In Sviluppo',
        'products.itechAr.title': 'iTech AR',
        'products.itechAr.desc': 'Una vista AR basata su fotocamera per il cantiere — inquadra la struttura con telefono o tablet e vedi la disposizione delle armature rilevate dall\'IA sovrapposta in tempo reale alle barre fisiche, per una rapida verifica in cantiere rispetto al disegno.',
        'products.itechAr.feature1': 'Sovrapposizione AR in tempo reale delle armature rilevate e della distinta di piegatura sulla fotocamera',
        'products.itechAr.feature2': 'Segnala le discrepanze tra il cantiere reale e il disegno',
        'products.itechAr.feature3': 'Modalità di acquisizione offline per cantieri senza connettività affidabile',
        'products.itechAr.feature4': 'Report di verifica in cantiere esportabile',
```

- [ ] **Step 6: Add keys to the `fr` block**

Insert before that block's closing `},`:

```javascript
        'nav.journey': 'Notre Parcours',
        'journey.title': 'De la Smart Factory à l\'AEC',
        'journey.subtitle': 'Nous avons commencé avec une IA généraliste pour l\'industrie manufacturière. Nous nous sommes concentrés sur un seul produit approfondi pour la construction.',
        'journey.then.era': '2020 — 2024',
        'journey.then.tagline': '« Faire que chaque instant compte »',
        'journey.then.desc': 'Notre mission était de transformer la façon dont les gens vivent et gèrent le temps grâce à l\'IA — en aidant les entreprises manufacturières traditionnelles dans leur transformation numérique avec des systèmes pilotés par l\'IA, l\'analyse de données et l\'automatisation intelligente.',
        'journey.then.chip1': 'Smart Factory',
        'journey.then.chip2': 'Transformation Numérique',
        'journey.then.chip3': 'Optimisation des Processus',
        'journey.then.chip4': 'Analyse de Données',
        'journey.now.era': '2025 — Aujourd\'hui',
        'journey.now.tagline': 'Estimation d\'Armatures par IA pour la Construction',
        'journey.now.desc': 'Nous avons concentré notre attention sur iTech, un système d\'IA de bout en bout qui transforme les plans de construction en estimations précises d\'armatures et en plans de façonnage, pour le secteur AEC.',
        'journey.now.chip1': 'Estimation d\'Armatures par IA',
        'journey.now.chip2': 'Métré d\'Armatures',
        'journey.now.chip3': 'AEC',
        'products.itech.spec1Label': 'Entrée',
        'products.itech.spec1Value': 'Plans de construction — DWG ou PDF',
        'products.itech.spec2Label': 'Sortie',
        'products.itech.spec2Value': 'Métré d\'armatures et plan de façonnage, exportable en CSV/Excel',
        'products.itech.spec3Label': 'Pipeline',
        'products.itech.spec3Value': 'Téléversement → Détection IA → Estimation et plan',
        'products.itechAr.badge': 'En Développement',
        'products.itechAr.title': 'iTech AR',
        'products.itechAr.desc': 'Une vue en réalité augmentée basée sur la caméra pour le chantier — pointez un téléphone ou une tablette vers la structure et voyez la disposition des armatures détectées par l\'IA superposée en temps réel aux barres physiques, pour une vérification rapide sur site par rapport au plan.',
        'products.itechAr.feature1': 'Superposition AR en temps réel des armatures détectées et du plan de façonnage sur la vue caméra',
        'products.itechAr.feature2': 'Signale les écarts entre le chantier réel et le plan',
        'products.itechAr.feature3': 'Mode de capture hors ligne pour les chantiers sans connectivité fiable',
        'products.itechAr.feature4': 'Rapport de vérification sur site exportable',
```

- [ ] **Step 7: Add keys to the `ko` block**

Insert before that block's closing `},`:

```javascript
        'nav.journey': '우리의 여정',
        'journey.title': '스마트 팩토리에서 AEC로',
        'journey.subtitle': '제조업을 위한 폭넓은 AI에서 시작해, 건설을 위한 하나의 깊이 있는 제품으로 초점을 좁혔습니다.',
        'journey.then.era': '2020 — 2024',
        'journey.then.tagline': '"모든 순간을 가치있게"',
        'journey.then.desc': '우리의 사명은 AI를 통해 사람들이 시간을 경험하고 관리하는 방식을 재구성하는 것이었습니다 — AI 기반 시스템, 데이터 분석, 지능형 자동화로 전통 제조업체의 디지털 전환을 지원했습니다.',
        'journey.then.chip1': '스마트 팩토리',
        'journey.then.chip2': '디지털 전환',
        'journey.then.chip3': '공정 최적화',
        'journey.then.chip4': '데이터 분석',
        'journey.now.era': '2025 — 현재',
        'journey.now.tagline': '건설을 위한 AI 철근 적산',
        'journey.now.desc': '우리는 iTech에 집중했습니다 — 시공도면을 정확한 철근 적산과 배근 스케줄로 변환하는, AEC 산업을 위한 엔드투엔드 AI 시스템입니다.',
        'journey.now.chip1': 'AI 철근 적산',
        'journey.now.chip2': '철근 물량 산출',
        'journey.now.chip3': 'AEC',
        'products.itech.spec1Label': '입력',
        'products.itech.spec1Value': '시공도면 — DWG 또는 PDF',
        'products.itech.spec2Label': '출력',
        'products.itech.spec2Value': '철근 적산 및 배근 스케줄, CSV/Excel로 내보내기 가능',
        'products.itech.spec3Label': '파이프라인',
        'products.itech.spec3Value': '업로드 → AI 감지 → 적산 및 스케줄',
        'products.itechAr.badge': '개발 중',
        'products.itechAr.title': 'iTech AR',
        'products.itechAr.desc': '현장을 위한 카메라 기반 AR 뷰 — 휴대폰이나 태블릿을 구조물에 비추면 AI가 감지한 철근 배치가 실시간으로 실제 철근 위에 겹쳐 표시되어, 도면과의 빠른 현장 대조가 가능합니다.',
        'products.itechAr.feature1': '감지된 철근과 배근 스케줄을 카메라 화면에 실시간 AR로 오버레이',
        'products.itechAr.feature2': '현장 실물과 도면 간의 차이를 표시',
        'products.itechAr.feature3': '연결이 불안정한 현장을 위한 오프라인 캡처 모드',
        'products.itechAr.feature4': '내보내기 가능한 현장 검증 리포트',
```

- [ ] **Step 8: Add keys to the `de` block**

Insert before that block's closing `},`:

```javascript
        'nav.journey': 'Unser Werdegang',
        'journey.title': 'Von Smart Factory zu AEC',
        'journey.subtitle': 'Wir haben breit angefangen, mit KI für die Fertigung. Wir haben uns auf ein einziges, tiefgehendes Produkt für den Bau konzentriert.',
        'journey.then.era': '2020 — 2024',
        'journey.then.tagline': '„Jeden Moment zählen lassen"',
        'journey.then.desc': 'Unsere Mission war es, durch KI neu zu gestalten, wie Menschen Zeit erleben und verwalten — wir halfen traditionellen Fertigungsunternehmen bei der digitalen Transformation mit KI-gestützten Systemen, Datenanalyse und intelligenter Automatisierung.',
        'journey.then.chip1': 'Smart Factory',
        'journey.then.chip2': 'Digitale Transformation',
        'journey.then.chip3': 'Prozessoptimierung',
        'journey.then.chip4': 'Datenanalyse',
        'journey.now.era': '2025 — Heute',
        'journey.now.tagline': 'KI-Bewehrungsschätzung für den Bau',
        'journey.now.desc': 'Wir haben unseren Fokus auf iTech gerichtet — ein durchgängiges KI-System, das Baupläne in präzise Bewehrungsschätzungen und Biegelisten für die AEC-Branche verwandelt.',
        'journey.now.chip1': 'KI-Bewehrungsschätzung',
        'journey.now.chip2': 'Bewehrungsaufmaß',
        'journey.now.chip3': 'AEC',
        'products.itech.spec1Label': 'Eingabe',
        'products.itech.spec1Value': 'Baupläne — DWG oder PDF',
        'products.itech.spec2Label': 'Ausgabe',
        'products.itech.spec2Value': 'Bewehrungsaufmaß und Biegeliste, exportierbar als CSV/Excel',
        'products.itech.spec3Label': 'Ablauf',
        'products.itech.spec3Value': 'Hochladen → KI-Erkennung → Schätzung & Liste',
        'products.itechAr.badge': 'In Entwicklung',
        'products.itechAr.title': 'iTech AR',
        'products.itechAr.desc': 'Eine kamerabasierte AR-Ansicht für die Baustelle — richten Sie ein Telefon oder Tablet auf die Struktur und sehen Sie die KI-erkannte Bewehrungsanordnung in Echtzeit über die physischen Stäbe gelegt, für eine schnelle Vor-Ort-Prüfung gegen den Plan.',
        'products.itechAr.feature1': 'Echtzeit-AR-Überlagerung der erkannten Bewehrung und Biegeliste auf die Kameraansicht',
        'products.itechAr.feature2': 'Markiert Abweichungen zwischen Baustelle und Plan',
        'products.itechAr.feature3': 'Offline-Erfassungsmodus für Baustellen ohne zuverlässige Verbindung',
        'products.itechAr.feature4': 'Exportierbarer Vor-Ort-Prüfbericht',
```

- [ ] **Step 9: Manual verification**

Reload `http://localhost:8000`, switch the language selector through all 8 languages, and confirm the Journey section, product spec list, and AR block all show translated text (not English fallback and not raw keys like `journey.title`) in each language.

- [ ] **Step 10: Commit**

```bash
git add script.js
git commit -m "Add i18n translations for Journey, rebar spec, and iTech AR across all 8 languages"
```

---

### Task 5: Final full-site manual QA pass

**Files:** none (verification only)

- [ ] **Step 1: Desktop QA**

With the local server running, check at 1440px width: Journey section layout (dashed "then" panel vs accented "now" panel with connector arrow between), Product section spec list, and the AR block's 2-column feature grid.

- [ ] **Step 2: Mobile QA**

Resize to 375px width (or use browser device toolbar). Confirm: Journey grid collapses to single column (uses the existing `@media (max-width: 980px)` rule that already targets `.hero .container, .product-showcase .container, .about .container, .contact .container` — verify `.journey-grid` also needs adding to that selector list if it doesn't stack correctly), AR features list collapses to 1 column, nothing overflows horizontally.

- [ ] **Step 3: If `.journey-grid` doesn't stack on mobile, add it to the breakpoint**

In `styles.css`, find:
```css
    .hero .container, .product-showcase .container, .about .container, .contact .container { grid-template-columns: 1fr; }
```
Change to:
```css
    .hero .container, .product-showcase .container, .about .container, .contact .container, .journey-grid { grid-template-columns: 1fr; }
```
And hide the connector arrow on mobile by adding within the same `@media (max-width: 980px)` block:
```css
    .journey-connector { display: none; }
```

- [ ] **Step 4: Commit any mobile fixes**

```bash
git add styles.css
git commit -m "Fix mobile responsive layout for Journey section"
```

(Skip this commit if no changes were needed in Step 3.)

- [ ] **Step 5: Push the branch**

```bash
git push -u origin redesign/journey-ar-rebar
```

- [ ] **Step 6: Open a PR**

```bash
gh pr create --title "Add Our Journey section, iTech AR spec, rebar spec expansion" --body "$(cat <<'EOF'
## Summary
- Adds an "Our Journey" section recapping the site's pre-pivot Smart Factory / Manufacturing AI positioning alongside the current AEC/rebar focus, using real prior copy from git history.
- Expands the iTech product section with a concrete spec list (input/output/pipeline).
- Adds a new "iTech AR" in-development block describing an AR site-verification feature for iTech, clearly labeled as not yet shipped.
- Full i18n across all 8 supported languages (en, zh-TW, ja, es, it, fr, ko, de).

## Test plan
- [ ] Loaded locally via `python -m http.server`, checked all 3 new sections render correctly at desktop and mobile widths
- [ ] Verified all 8 languages show translated (not fallback/raw-key) text for new content
- [ ] Verified existing sections/nav/anchors still work after renumbering

Spec: docs/superpowers/specs/2026-07-24-journey-ar-rebar-design.md
Plan: docs/superpowers/plans/2026-07-25-journey-ar-rebar.md
EOF
)"
```
