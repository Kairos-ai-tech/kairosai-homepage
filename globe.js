(function () {
    'use strict';

    var section = document.getElementById('clients');
    var canvas = document.getElementById('clientsGlobe');
    if (!section || !canvas || !window.fetch) return;

    var HQ = { lat: 25.03, lon: 121.56 };
    var TILT = 22 * Math.PI / 180;
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var rad = Math.PI / 180;

    function vec(lat, lon) {
        var la = lat * rad, lo = lon * rad;
        return [Math.cos(la) * Math.sin(lo), Math.sin(la), Math.cos(la) * Math.cos(lo)];
    }

    function landPoints(land) {
        var pts = [];
        land.rows.forEach(function (hex, r) {
            var bits = '';
            for (var i = 0; i < hex.length; i++) bits += parseInt(hex[i], 16).toString(2).padStart(4, '0');
            bits = bits.slice(1);
            var lat = 90 - land.step / 2 - r * land.step;
            var stride = Math.min(14, Math.max(1, Math.round(1 / Math.cos(lat * rad))));
            for (var c = 0; c < bits.length; c += stride) {
                if (bits[c] === '1') pts.push.apply(pts, vec(lat, -180 + land.step / 2 + c * land.step));
            }
        });
        return new Float32Array(pts);
    }

    function slerp(a, b, t) {
        var d = Math.max(-1, Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
        var w = Math.acos(d);
        if (w < 1e-4) return a.slice();
        var s = Math.sin(w), k1 = Math.sin((1 - t) * w) / s, k2 = Math.sin(t * w) / s;
        return [a[0] * k1 + b[0] * k2, a[1] * k1 + b[1] * k2, a[2] * k1 + b[2] * k2];
    }

    function fillPanel(locs) {
        var companies = 0;
        var list = document.getElementById('clientsList');
        locs.forEach(function (l) {
            companies += l.companies;
            var li = document.createElement('li');
            var name = document.createElement('span');
            name.textContent = l.country ? l.city + ', ' + l.country : l.city;
            var n = document.createElement('span');
            n.className = 'clients-list-n';
            n.textContent = String(l.companies);
            li.appendChild(name);
            li.appendChild(n);
            list.appendChild(li);
        });
        document.getElementById('clientsCompanies').textContent = String(companies);
        document.getElementById('clientsCities').textContent = String(locs.length);
    }

    function start(land, locs) {
        var ctx = canvas.getContext('2d');
        if (!ctx) return;
        var pts = landPoints(land);
        var hq = vec(HQ.lat, HQ.lon);
        var markers = locs.map(function (l) { return { v: vec(l.lat, l.lon) }; });
        var arcs = markers.map(function (m) {
            var a = [];
            for (var i = 0; i <= 48; i++) {
                var p = slerp(hq, m.v, i / 48);
                var k = 1 + 0.2 * Math.sin(Math.PI * i / 48);
                a.push([p[0] * k, p[1] * k, p[2] * k]);
            }
            return a;
        });

        var size = 0, dpr = 1;
        var rot = locs[0].lon * rad;
        var tilt = TILT;
        var dragging = false, lastX = 0, lastY = 0;
        var visible = true, rafId = 0, last = 0;

        function resize() {
            var w = canvas.clientWidth;
            if (!w) return;
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            size = Math.round(w * dpr);
            canvas.width = size;
            canvas.height = size;
            draw(performance.now());
        }

        function project(p, cr, sr, ct, st) {
            var x = p[0] * cr - p[2] * sr;
            var z1 = p[0] * sr + p[2] * cr;
            var y = p[1] * ct - z1 * st;
            var z = p[1] * st + z1 * ct;
            return [x, y, z];
        }

        function draw(now) {
            if (!size) return;
            var R = size * 0.42, cx = size / 2, cy = size / 2;
            var cr = Math.cos(rot), sr = Math.sin(rot), ct = Math.cos(tilt), st = Math.sin(tilt);
            ctx.clearRect(0, 0, size, size);

            var halo = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.28);
            halo.addColorStop(0, 'rgba(91,200,255,0.18)');
            halo.addColorStop(1, 'rgba(91,200,255,0)');
            ctx.fillStyle = halo;
            ctx.fillRect(0, 0, size, size);

            var body = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
            body.addColorStop(0, '#16304f');
            body.addColorStop(1, '#070d18');
            ctx.beginPath();
            ctx.arc(cx, cy, R, 0, Math.PI * 2);
            ctx.fillStyle = body;
            ctx.fill();
            ctx.lineWidth = Math.max(1, dpr);
            ctx.strokeStyle = 'rgba(91,200,255,0.35)';
            ctx.stroke();

            var d = Math.max(1.4 * dpr, size / 300);
            for (var i = 0; i < pts.length; i += 3) {
                var x = pts[i] * cr - pts[i + 2] * sr;
                var z1 = pts[i] * sr + pts[i + 2] * cr;
                var z = pts[i + 1] * st + z1 * ct;
                if (z <= 0) continue;
                var y = pts[i + 1] * ct - z1 * st;
                ctx.fillStyle = 'rgba(91,200,255,' + (0.2 + 0.6 * z).toFixed(2) + ')';
                ctx.fillRect(cx + x * R - d / 2, cy - y * R - d / 2, d, d);
            }

            var t = now / 1000;
            ctx.lineWidth = Math.max(1, dpr);
            arcs.forEach(function (arc, n) {
                ctx.beginPath();
                var pen = false;
                for (var j = 0; j < arc.length; j++) {
                    var q = project(arc[j], cr, sr, ct, st);
                    if (q[2] <= 0.02) { pen = false; continue; }
                    var px = cx + q[0] * R, py = cy - q[1] * R;
                    if (pen) ctx.lineTo(px, py); else ctx.moveTo(px, py);
                    pen = true;
                }
                ctx.strokeStyle = 'rgba(255,155,61,0.5)';
                ctx.stroke();
                if (!reduced) {
                    var f = (t * 0.22 + n * 0.19) % 1;
                    var q2 = project(arc[Math.round(f * 48)], cr, sr, ct, st);
                    if (q2[2] > 0.02) {
                        ctx.beginPath();
                        ctx.arc(cx + q2[0] * R, cy - q2[1] * R, 2.2 * dpr, 0, Math.PI * 2);
                        ctx.fillStyle = '#ffd9b0';
                        ctx.fill();
                    }
                }
            });

            var h = project(hq, cr, sr, ct, st);
            if (h[2] > 0) {
                ctx.beginPath();
                ctx.arc(cx + h[0] * R, cy - h[1] * R, 3 * dpr, 0, Math.PI * 2);
                ctx.fillStyle = '#5bc8ff';
                ctx.fill();
            }

            markers.forEach(function (m, n) {
                var q = project(m.v, cr, sr, ct, st);
                if (q[2] <= 0) return;
                var px = cx + q[0] * R, py = cy - q[1] * R;
                var ph = reduced ? 0.5 : ((t * 0.6 + n * 0.23) % 1);
                ctx.beginPath();
                ctx.arc(px, py, (4 + ph * 16) * dpr, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(255,155,61,' + (0.6 * (1 - ph)).toFixed(2) + ')';
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(px, py, 3.6 * dpr, 0, Math.PI * 2);
                ctx.fillStyle = '#ff9b3d';
                ctx.fill();
            });
        }

        function frame(now) {
            rafId = 0;
            if (!visible || document.hidden) return;
            var dt = last ? Math.min((now - last) / 1000, 0.1) : 0;
            last = now;
            if (!dragging) rot += dt * 0.14;
            draw(now);
            rafId = requestAnimationFrame(frame);
        }

        function kick() {
            if (reduced) { draw(performance.now()); return; }
            if (!rafId && visible && !document.hidden) { last = 0; rafId = requestAnimationFrame(frame); }
        }

        canvas.addEventListener('pointerdown', function (e) {
            dragging = true;
            lastX = e.clientX;
            lastY = e.clientY;
            canvas.setPointerCapture(e.pointerId);
            canvas.classList.add('is-dragging');
        });
        canvas.addEventListener('pointermove', function (e) {
            if (!dragging) return;
            rot -= (e.clientX - lastX) * 0.008;
            tilt = Math.max(0.05, Math.min(0.75, tilt + (e.clientY - lastY) * 0.004));
            lastX = e.clientX;
            lastY = e.clientY;
            if (reduced) draw(performance.now());
        });
        function release() { dragging = false; canvas.classList.remove('is-dragging'); }
        canvas.addEventListener('pointerup', release);
        canvas.addEventListener('pointercancel', release);

        if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas);
        else window.addEventListener('resize', resize);
        if ('IntersectionObserver' in window) {
            new IntersectionObserver(function (en) {
                visible = en[en.length - 1].isIntersecting;
                if (visible) kick();
            }).observe(canvas);
        }
        document.addEventListener('visibilitychange', kick);
        resize();
        kick();
    }

    Promise.all([
        fetch('data/clients.json').then(function (r) { return r.json(); }),
        fetch('data/globe-land.json').then(function (r) { return r.json(); })
    ]).then(function (res) {
        var locs = ((res[0] && res[0].locations) || []).filter(function (l) {
            return l && typeof l.city === 'string' && isFinite(l.lat) && isFinite(l.lon) && Math.abs(l.lat) <= 90 && Math.abs(l.lon) <= 180;
        }).map(function (l) {
            return { city: l.city, country: typeof l.country === 'string' ? l.country : '', lat: +l.lat, lon: +l.lon, companies: l.companies > 0 ? Math.floor(l.companies) : 1 };
        });
        if (!locs.length) return;
        fillPanel(locs);
        section.hidden = false;
        if (window.ScrollTrigger) window.ScrollTrigger.refresh();
        start(res[1], locs);
    }).catch(function () {});
})();
