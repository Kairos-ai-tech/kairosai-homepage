/* ============================================================
   Motion layer — progressive enhancement on top of script.js
   Lenis (smooth scroll) · GSAP + ScrollTrigger (scroll choreography)
   React Bits–style
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
        // In-page anchors are routed through window.__lenis by script.js's handler.
    }

    // ---------- GSAP + ScrollTrigger choreography ----------
    if (hasST && !reduced) {
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
    }
})();
