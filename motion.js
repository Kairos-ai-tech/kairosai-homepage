/* ============================================================
   Motion layer — progressive enhancement on top of script.js
   Lenis (smooth scroll) · GSAP + ScrollTrigger (scroll choreography)
   Vanta NET (hero background, lazy-loaded) · React Bits–style
   interactions ported to vanilla (SpotlightCard, Magnet, TiltedCard).
   Every block is guarded: if a CDN script is blocked or the visitor
   prefers reduced motion, the page works exactly as before.
   ============================================================ */
(function () {
    'use strict';
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer:fine)').matches;
    const hasGsap = typeof window.gsap !== 'undefined';
    const hasST = hasGsap && typeof window.ScrollTrigger !== 'undefined';
    if (hasST) gsap.registerPlugin(ScrollTrigger);

    // ---------- React Bits · SpotlightCard (pointer-follow glow; CSS does the paint) ----------
    if (finePointer && !reduced) {
        document.querySelectorAll('.service-card, .stat-card, .step, .story-block, .news-item').forEach((card) => {
            card.classList.add('spotlight');
            const glow = document.createElement('span');
            glow.className = 'spot-glow'; glow.setAttribute('aria-hidden', 'true');
            card.appendChild(glow);
            card.addEventListener('pointermove', (e) => {
                const r = card.getBoundingClientRect();
                card.style.setProperty('--sx', (e.clientX - r.left) + 'px');
                card.style.setProperty('--sy', (e.clientY - r.top) + 'px');
            }, { passive: true });
        });
    }

    // ---------- Lenis smooth scroll, driven by GSAP's ticker ----------
    let lenis = null;
    if (typeof window.Lenis !== 'undefined' && !reduced) {
        lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, smoothWheel: true });
        window.__lenis = lenis;
        if (hasST) {
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((t) => lenis.raf(t * 1000));
            gsap.ticker.lagSmoothing(0);
        } else {
            const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
            requestAnimationFrame(raf);
        }
        // Route in-page anchors through Lenis (runs before script.js's native handler).
        document.addEventListener('click', (e) => {
            const a = e.target.closest && e.target.closest('a[href^="#"]');
            if (!a) return;
            const href = a.getAttribute('href');
            if (!href || href.length < 2) return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            e.stopPropagation();
            lenis.scrollTo(target, { offset: -70, duration: 1.2 });
        }, true);
    }

    // ---------- GSAP + ScrollTrigger choreography ----------
    if (hasST && !reduced) {
        // Hero blueprint drifts slower than the page, content eases out on exit.
        const heroCard = document.querySelector('.blueprint-card');
        if (heroCard) {
            gsap.to(heroCard, { y: 70, ease: 'none',
                scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
        }
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            gsap.to(heroContent, { y: -40, opacity: 0.25, ease: 'none',
                scrollTrigger: { trigger: '.hero', start: '45% top', end: 'bottom top', scrub: true } });
        }
        // Section titles: amber underline rule draws in as the heading enters.
        gsap.utils.toArray('.section-title').forEach((h) => {
            h.classList.add('rule-draw');
            ScrollTrigger.create({ trigger: h, start: 'top 85%', once: true,
                onEnter: () => gsap.to(h, { '--rule': 1, duration: 0.9, ease: 'power3.out' }) });
        });
        // Grids: staggered settle (adds depth on top of the IntersectionObserver fade).
        ['.process-grid', '.services-grid'].forEach((sel) => {
            const grid = document.querySelector(sel);
            if (!grid) return;
            gsap.from(grid.children, { scale: 0.97, duration: 0.8, ease: 'power3.out', stagger: 0.1, clearProps: 'scale',
                scrollTrigger: { trigger: grid, start: 'top 85%', once: true } });
        });
        window.addEventListener('load', () => ScrollTrigger.refresh());
    }

    // ---------- React Bits · Magnet (buttons pull toward the cursor) ----------
    if (hasGsap && finePointer && !reduced) {
        document.querySelectorAll('.btn-primary, .btn-secondary').forEach((btn) => {
            const strength = 0.25;
            btn.addEventListener('pointermove', (e) => {
                const r = btn.getBoundingClientRect();
                gsap.to(btn, { '--magx': ((e.clientX - (r.left + r.width / 2)) * strength) + 'px',
                               '--magy': ((e.clientY - (r.top + r.height / 2)) * strength) + 'px',
                               duration: 0.4, ease: 'power3.out', overwrite: 'auto' });
            });
            btn.addEventListener('pointerleave', () => {
                gsap.to(btn, { '--magx': '0px', '--magy': '0px', duration: 0.7, ease: 'elastic.out(1,0.5)', overwrite: 'auto' });
            });
        });

        // ---------- React Bits · TiltedCard (hero blueprint) ----------
        const card = document.querySelector('.blueprint-card');
        if (card) {
            card.classList.add('tilt');
            card.addEventListener('pointermove', (e) => {
                const r = card.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width - 0.5;
                const py = (e.clientY - r.top) / r.height - 0.5;
                gsap.to(card, { '--ry': (px * 10) + 'deg', '--rx': (-py * 10) + 'deg', duration: 0.5, ease: 'power2.out', overwrite: 'auto' });
            });
            card.addEventListener('pointerleave', () => {
                gsap.to(card, { '--ry': '0deg', '--rx': '0deg', duration: 0.8, ease: 'power3.out', overwrite: 'auto' });
            });
        }
    }

    // ---------- Vanta NET hero background (lazy; desktop, motion-OK only) ----------
    const heroEl = document.querySelector('.hero');
    const bgEl = document.getElementById('hero-vanta');
    const conn = navigator.connection || {};
    const heavyOK = heroEl && bgEl && !reduced && finePointer && window.innerWidth >= 900 &&
        !conn.saveData && (navigator.hardwareConcurrency || 4) >= 4;
    if (heavyOK) {
        const load = (src) => new Promise((res, rej) => {
            const s = document.createElement('script');
            s.src = src; s.async = true; s.onload = res; s.onerror = rej;
            document.head.appendChild(s);
        });
        let effect = null;
        let starting = false;
        const start = () => {
            if (effect || starting || !window.VANTA || !window.THREE) return;
            starting = true;
            try {
                effect = VANTA.NET({
                    el: bgEl, THREE: window.THREE, mouseControls: true, touchControls: false, gyroControls: false,
                    color: 0x5bc8ff, backgroundColor: 0x060a11, backgroundAlpha: 0,
                    points: 9, maxDistance: 22, spacing: 18, showDots: true, scale: 1, scaleMobile: 1
                });
                bgEl.classList.add('is-on');
            } catch (err) { effect = null; }
            starting = false;
        };
        const stop = () => { if (effect) { try { effect.destroy(); } catch (e) {} effect = null; bgEl.classList.remove('is-on'); } };
        const boot = () => {
            const base = 'https://cdn.jsdelivr.net/npm/';
            load(base + 'three@0.134.0/build/three.min.js')
                .then(() => load(base + 'vanta@0.5.24/dist/vanta.net.min.js'))
                .then(() => {
                    // Only render while the hero is on screen.
                    new IntersectionObserver((en) => en[0].isIntersecting ? start() : stop(), { threshold: 0.05 }).observe(heroEl);
                })
                .catch(() => {});
        };
        if ('requestIdleCallback' in window) requestIdleCallback(boot, { timeout: 2500 });
        else setTimeout(boot, 1500);
    }
})();
