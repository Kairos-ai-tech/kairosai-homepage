# Team section — ready-to-activate scaffold

Not live. Built when real team member names/photos/bios weren't available yet
(see PR #23). To ship it:

1. Add `team.tag`/`team.title`/`team.subtitle`, `nav.team`, and per-member
   i18n keys to `extraI18n` in `script.js` (all 8 languages) — follow the
   `pilot.*`/`nav.pilot` keys there as a pattern.
2. Replace each `.team-photo` placeholder with a real
   `<img src="team/<name>.jpg" alt="..." width="120" height="120">`.
3. Fill in real name/title/bio/LinkedIn per card, add or remove `.team-card`
   blocks to match the actual team size.
4. Add a "Team" nav link (`<li><a href="#team" class="nav-link"
   data-i18n="nav.team">Team</a></li>` in `.nav-menu`) and a `sitemap.xml`
   entry for `#team` — see how `#pilot` was added for the pattern.
5. Optionally add `Person` schema (with `sameAs` LinkedIn URLs) alongside the
   existing `Organization` JSON-LD in `index.html`.
6. Paste the HTML below into `index.html` (right before `<!-- Contact -->`)
   and the CSS below into `styles.css`.

## HTML

```html
<!-- Team section -->
<section id="team" class="team">
    <div class="container">
        <div class="section-header" data-reveal>
            <div class="section-tag">— <span data-i18n="team.tag">Our Team</span></div>
            <h2 class="section-title" data-i18n="team.title">Meet the Team</h2>
            <p class="section-subtitle" data-i18n="team.subtitle">The people building iTech and Kairos.ai.</p>
        </div>
        <div class="team-grid">
            <div class="team-card" data-reveal>
                <div class="team-photo">?</div>
                <h3 class="team-name">Name</h3>
                <div class="team-role">Founder &amp; CEO</div>
                <p class="team-bio">One-line bio goes here.</p>
                <a href="#" class="team-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            </div>
            <div class="team-card" data-reveal>
                <div class="team-photo">?</div>
                <h3 class="team-name">Name</h3>
                <div class="team-role">Co-Founder &amp; CTO</div>
                <p class="team-bio">One-line bio goes here.</p>
                <a href="#" class="team-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            </div>
            <div class="team-card" data-reveal>
                <div class="team-photo">?</div>
                <h3 class="team-name">Name</h3>
                <div class="team-role">Engineering Lead</div>
                <p class="team-bio">One-line bio goes here.</p>
                <a href="#" class="team-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            </div>
        </div>
    </div>
</section>
```

## CSS

```css
/* ============================================================
   TEAM
   ============================================================ */
.team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.team-card {
    padding: 30px; border: 1px solid var(--line); border-radius: var(--radius); text-align: center;
    background: var(--panel); backdrop-filter: blur(8px); transition: transform 0.4s var(--ease), border-color 0.4s;
}
.team-card:hover { transform: translateY(-6px); border-color: rgba(91, 200, 255, 0.4); }
.team-photo {
    width: 88px; height: 88px; margin: 0 auto 18px; border-radius: 50%; overflow: hidden;
    display: flex; align-items: center; justify-content: center;
    background: var(--panel-2); color: var(--cyan); font-family: var(--font-display); font-size: 1.6rem;
}
.team-photo img { width: 100%; height: 100%; object-fit: cover; }
.team-name { font-family: var(--font-display); font-weight: 600; font-size: 1.2rem; text-transform: uppercase; }
.team-role { font-family: var(--font-mono); font-size: 0.76rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--cyan); margin-top: 4px; }
.team-bio { color: var(--muted); font-size: 0.92rem; margin-top: 12px; }
.team-linkedin { display: inline-block; margin-top: 14px; font-family: var(--font-mono); font-size: 0.76rem; color: var(--faint); transition: color 0.3s; }
.team-linkedin:hover { color: var(--cyan); }
```

Add this to the mobile responsive block (`@media (max-width: 980px)`) alongside `.services-grid`:

```css
.team-grid { grid-template-columns: 1fr; }
```
